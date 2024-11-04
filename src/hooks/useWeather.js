import { useState } from 'react';

export default function useWeather() {
    const [weatherData, setWeatherData] = useState({
        location: '',
        climate: '',
        temparature: '',
        maxTemparature: '',
        minTemparature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        longitude: '',
        latitude: '',
    });

    const [loading, setLoading] = useState({
        state: false,
        message: '',
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (longitude, latitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Fetching weather data...',
            });

            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&unit=metric`,
            );
            if (!response.ok) {
                const errorMessage =
                    'Fetching weather data failed: ' + response.status;
                throw new Error(errorMessage);
            }

            const data = response.json();

            setWeatherData({
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temparature: data?.main?.temp,
                maxTemparature: data?.main?.temp_max,
                minTemparature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            });
        } catch (err) {
        } finally {
            setLoading({ ...loading, state: false, message: '' });
        }
    };
}
