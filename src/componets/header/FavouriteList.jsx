import { useContext } from 'react';
import { FavouritesContext, LocationContext } from '../../context';

export default function FavouriteList() {
    const { favourites } = useContext(FavouritesContext);
    const { setSelectedLocation } = useContext(LocationContext);

    const handleFavourite = (location) => {
        setSelectedLocation({ ...location });
    };

    return (
        <div className="absolute right-0 top-16 max-w-xs rounded-md border-gray-500 bg-white py-4 text-black shadow-lg">
            <h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
            <ul className="mt-4 space-y-2 *:cursor-pointer *:px-4 *:py-2">
                {favourites.length > 0 ? (
                    favourites.map((favourite) => (
                        <li
                            onClick={() => handleFavourite(favourite)}
                            key={crypto.randomUUID()}
                            className="cursor-pointer hover:bg-gray-200"
                        >
                            {favourite.location}
                        </li>
                    ))
                ) : (
                    <p className="text-red-500">No favourites found!</p>
                )}
            </ul>
        </div>
    );
}
