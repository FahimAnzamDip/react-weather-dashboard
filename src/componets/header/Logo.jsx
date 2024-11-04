import SiteLogo from '../../assets/images/logo.svg';

export default function Logo() {
    return (
        <a href="../../index.html">
            <img className="h-9" src={SiteLogo} alt="Weather App" />
        </a>
    );
}
