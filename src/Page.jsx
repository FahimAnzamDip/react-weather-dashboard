import { useContext, useEffect, useState } from 'react';
import ClearSkyImage from './assets/images/backgrounds/clear-sky.jpg';
import FewCloudsImage from './assets/images/backgrounds/few-clouds.jpg';
import MistImage from './assets/images/backgrounds/mist.jpeg';
import RainyDayImage from './assets/images/backgrounds/rainy-day.jpg';
import ScatterdCloudsImage from './assets/images/backgrounds/scattered-clouds.jpg';
import SnowImage from './assets/images/backgrounds/sunny.jpg';
import ThunderStormImage from './assets/images/backgrounds/thunderstorm.jpg';
import WinterImage from './assets/images/backgrounds/winter.jpg';
import Header from './componets/header/Header';
import WeatherBoard from './componets/weather/WeatherBoard';
import { WeatherContext } from './context';

export default function Page() {
    const { weatherData } = useContext(WeatherContext);

    const [climateImage, setClimateImage] = useState('');

    function getBackgroundImage(climate) {
        switch (climate) {
            case 'Rain':
                return RainyDayImage;
            case 'Clouds':
                return ScatterdCloudsImage;
            case 'Clear':
                return ClearSkyImage;
            case 'Snow':
                return SnowImage;
            case 'Thunder':
                return ThunderStormImage;
            case 'Fog':
                return WinterImage;
            case 'Haze':
                return FewCloudsImage;
            case 'Mist':
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate]);

    return (
        <div
            className="grid h-screen place-items-center bg-body bg-cover bg-no-repeat font-[Roboto] text-light"
            style={{ backgroundImage: `url('${climateImage}')` }}
        >
            <Header />
            <main>
                <div className="container">
                    <WeatherBoard />
                </div>
            </main>
        </div>
    );
}
