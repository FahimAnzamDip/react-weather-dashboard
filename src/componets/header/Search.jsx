import SearchIcon from '../../assets/images/search.svg';

export default function Search() {
    return (
        <form action="#">
            <div className="group flex items-center space-x-2 border-b border-white/50 px-3 py-2 transition-all focus-within:rounded-md focus-within:border-b-0 focus-within:bg-black/30">
                <input
                    className="w-full border-none bg-transparent text-xs text-white outline-none placeholder:text-white md:text-base"
                    type="search"
                    placeholder="Search Location"
                    required=""
                />
                <button type="submit">
                    <img src={SearchIcon} />
                </button>
            </div>
        </form>
    );
}
