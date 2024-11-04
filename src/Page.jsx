import Header from './componets/header/Header';
import WeatherBoard from './componets/weather/WeatherBoard';
import WeatherProvider from './providers/WeatherProvider';

export default function Page() {
    return (
        <WeatherProvider>
            <Header />
            <main>
                <div className="container">
                    <WeatherBoard />
                </div>
            </main>
        </WeatherProvider>
    );
}
