export default function FavouriteList() {
    return (
        <div className="absolute right-0 top-16 max-w-xs rounded-md border-gray-500 bg-white py-4 text-black shadow-lg">
            <h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
            <ul className="mt-4 space-y-2 *:cursor-pointer *:px-4 *:py-2">
                <li className="hover:bg-gray-200">Dhaka</li>
                <li className="hover:bg-gray-200">Rangpur</li>
                <li className="hover:bg-gray-200">Europe</li>
            </ul>
        </div>
    );
}
