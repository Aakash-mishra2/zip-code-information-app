import { Link } from "react-router-dom";
import Icon from '../assets/icon.png';

const MainHeader = () => {

    return (
        <div>
            <Link to='/'>
                <h1 className="text-white bg-[#04364A] w-full max-h-fit items-center tracking-wider font-bold text-4xl flex flex-row gap-2 m-0 items-left p-4">
                    <img style={{ width: 60, height: 60 }} src={Icon} alt="App icon" />
                    Zip-Code App
                </h1>
            </Link>
        </div>
    )

}
export default MainHeader;