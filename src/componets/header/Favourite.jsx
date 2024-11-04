import HeartIcon from '../../assets/images/heart.svg';

export default function Favourite() {
    return (
        <div className="flex cursor-pointer items-center gap-2 rounded-md p-2 transition-all hover:bg-black/30">
            <img src={HeartIcon} alt="" />
            <span>Favourite Locations</span>
        </div>
    );
}
