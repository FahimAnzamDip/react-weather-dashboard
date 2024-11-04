import { useContext } from 'react';
import CloudIcon from '../../assets/images/cloud.svg';
import HazeIcon from '../../assets/images/haze.svg';
import SnowIcon from '../../assets/images/icons/snow.svg';
import SunnyIcon from '../../assets/images/icons/sunny.svg';
import PinIcon from '../../assets/images/pin.svg';
import RainIcon from '../../assets/images/rainy.svg';
import ThunderIcon from '../../assets/images/thunder.svg';
import { WeatherContext } from '../../context';
import { formatDate } from '../../utils/date-util';

export default function WeatherHeadline() {
    const { weatherData, loading } = useContext(WeatherContext);

    const { climate, location, temparature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case 'Rain':
                return RainIcon;
            case 'Clouds':
                return CloudIcon;
            case 'Clear':
                return SunnyIcon;
            case 'Snow':
                return SnowIcon;
            case 'Thunder':
                return ThunderIcon;
            case 'Fog':
                return HazeIcon;
            case 'Haze':
                return HazeIcon;
            case 'Mist':
                return HazeIcon;

            default:
                return SunnyIcon;
        }
    }

    return (
        <div>
            <div className="items-center justify-between max-md:flex md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="items-center max-md:flex max-md:space-x-4">
                    <h1 className="text-[60px] leading-none md:mb-4 lg:text-[80px] xl:text-[100px]">
                        {Math.round(temparature)}°
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinIcon} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">
                {formatDate(time, 'time', false)} {' - '}
                {formatDate(time, 'date', false)}
            </p>
        </div>
    );
}
