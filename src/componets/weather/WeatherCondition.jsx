import CloudIcon from '../../assets/images/icons/cloud.svg';
import HumidityIcon from '../../assets/images/icons/humidity.svg';
import TempMaxIcon from '../../assets/images/icons/temp-max.svg';
import TempMinIcon from '../../assets/images/icons/temp-min.svg';
import WindIcon from '../../assets/images/icons/wind.svg';

export default function WeatherCondition() {
    return (
        <div>
            <p className="mb-8 text-sm font-bold uppercase lg:text-lg">
                thunderstorm with light drizzle
            </p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={TempMaxIcon} alt="temp-max" />
                    </div>
                </li>
                <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={TempMinIcon} alt="temp-min" />
                    </div>
                </li>
                <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>58%</p>
                        <img src={HumidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>86%</p>
                        <img src={CloudIcon} alt="cloudy" />
                    </div>
                </li>
                <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>5km/h</p>
                        <img src={WindIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
}
