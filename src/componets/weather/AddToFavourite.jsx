import { useContext, useEffect, useState } from 'react';
import RedHeartIcon from '../../assets/images/heart-red.svg';
import HeartIcon from '../../assets/images/heart.svg';
import { FavouritesContext, WeatherContext } from '../../context';

export default function AddToFavourite() {
    const { favourites, addToFavourites, removeFromFavourites } =
        useContext(FavouritesContext);

    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const found = favourites.find(
            (favourite) => location === favourite.location,
        );
        setIsFavourite(found);
    }, []);

    const handleFavourites = () => {
        setIsFavourite(!isFavourite);

        const found = favourites.find(
            (favourite) => location === favourite.location,
        );
        if (!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
    };

    return (
        <button
            onClick={handleFavourites}
            className="inline-flex items-center space-x-2 rounded-md bg-[#C5C5C54D] px-3 py-1.5 text-sm md:text-base"
        >
            <span>Add to Favourite</span>
            <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
    );
}
