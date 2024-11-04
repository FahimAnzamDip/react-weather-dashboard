import CloudIcon from '../../assets/images/cloud.svg';
import PinIcon from '../../assets/images/pin.svg';

export default function WeatherHeadline() {
    return (
        <div>
            <div className="items-center justify-between max-md:flex md:-mt-10">
                <img src={CloudIcon} alt="cloud" />
                <div className="items-center max-md:flex max-md:space-x-4">
                    <h1 className="text-[60px] leading-none md:mb-4 lg:text-[80px] xl:text-[100px]">
                        16°
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinIcon} />
                        <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
        </div>
    );
}
