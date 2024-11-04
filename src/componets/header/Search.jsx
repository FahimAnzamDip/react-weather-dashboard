import { useContext, useState } from 'react';
import { LocationContext } from '../../context';
import { getBangladeshCityByName } from '../../data/location-data';
import useDebounce from '../../hooks/useDebounce';

export default function Search() {
    const [query, setQuery] = useState('');

    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((value) => {
        const fetchedLocation = getBangladeshCityByName(value);
        setSelectedLocation({ ...fetchedLocation });
    }, 500);

    const handleChange = (e) => {
        doSearch(e.target.value);
    };

    return (
        <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="group flex items-center space-x-2 border-b border-white/50 px-3 py-2 transition-all focus-within:rounded-md focus-within:border-b-0 focus-within:bg-black/30">
                <input
                    onChange={handleChange}
                    className="w-full border-none bg-transparent text-xs text-white outline-none placeholder:text-white md:text-base"
                    type="search"
                    placeholder="Search in Bangladesh..."
                    required
                />
            </div>
        </form>
    );
}
