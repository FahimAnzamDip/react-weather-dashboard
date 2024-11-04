import HeartIcon from '../../assets/images/heart.svg';

export default function AddToFavourite() {
    return (
        <button className="inline-flex items-center space-x-2 rounded-md bg-[#C5C5C54D] px-3 py-1.5 text-sm md:text-base">
            <span>Add to Favourite</span>
            <img src={HeartIcon} alt="" />
        </button>
    );
}
