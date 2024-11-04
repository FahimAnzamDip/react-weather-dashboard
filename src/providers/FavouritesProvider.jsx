import { FavouritesContext } from '../context';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useLocalStorage('favourites', []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourites([
            ...favourites,
            {
                latitude,
                longitude,
                location,
            },
        ]);
    };

    const removeFromFavourites = (location) => {
        setFavourites(
            favourites.filter((favourite) => location !== favourite.location),
        );
    };

    return (
        <FavouritesContext.Provider
            value={{ favourites, addToFavourites, removeFromFavourites }}
        >
            {children}
        </FavouritesContext.Provider>
    );
}
