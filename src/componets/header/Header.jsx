import { useState } from 'react';
import Favourite from './Favourite';
import FavouriteList from './FavouriteList';
import Logo from './Logo';
import Search from './Search';

export default function Header() {
    const [showFavourites, setShowFavourites] = useState(false);

    const handleShowFavourites = () => {
        setShowFavourites(!showFavourites);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo />
                <div className="relative flex items-center gap-4">
                    <Search />
                    <Favourite onShowFavourites={handleShowFavourites} />
                    {/* Modal */}
                    {showFavourites && <FavouriteList />}
                </div>
            </nav>
        </header>
    );
}
