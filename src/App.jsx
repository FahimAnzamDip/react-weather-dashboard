import Page from './Page';
import FavouritesProvider from './providers/FavouritesProvider';
import LocationProvider from './providers/LocationProvider';
import WeatherProvider from './providers/WeatherProvider';

export default function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouritesProvider>
                    <Page />
                </FavouritesProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}
