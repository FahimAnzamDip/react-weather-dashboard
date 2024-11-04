import AddToFavourite from './AddToFavourite';
import WeatherCondition from './WeatherCondition';
import WeatherHeadline from './WeatherHeadline';

export default function WeatherBoard() {
    return (
        <div className="mx-auto grid min-h-[520px] max-w-[1058px] rounded-xl border-2 border-white/[14%] bg-black/20 px-4 py-6 backdrop-blur-md lg:border-[3px] lg:px-14 lg:py-10">
            <div className="grid gap-10 md:grid-cols-2 md:gap-6">
                <div className="md:col-span-2">
                    <div className="flex items-center justify-end space-x-6">
                        <AddToFavourite />
                    </div>
                </div>
                <WeatherHeadline />
                <WeatherCondition />
            </div>
        </div>
    );
}
