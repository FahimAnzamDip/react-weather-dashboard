import { useState } from 'react';
import { LocationContext } from '../context';

export default function LocationProvider({ children }) {
    const [selectedLocation, setSelectedLocation] = useState({
        location: '',
        latitude: '',
        longitude: '',
    });

    return (
        <LocationContext.Provider
            value={{ selectedLocation, setSelectedLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
}
