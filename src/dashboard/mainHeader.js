import { Link } from "react-router-dom";
import Icon from '../assets/icon.png';

const MainHeader = () => {

    return (
        <div className="text-white bg-[#04364A] w-full max-h-fit items-center tracking-wider font-bold flex justify-between pl-10 pr-10">
            <Link to='/'>
                <h1 className="text-4xl flex flex-row gap-2 m-0 items-center p-4 hover:scale-105 transform duration-500">
                    <img style={{ width: 60, height: 60 }} src={Icon} alt="App icon" />
                    Zip-Code App
                </h1>
            </Link>
            <Link to='https://github.com/Aakash-mishra2/zip-code-information-app' target="__blank">
                <h1
                className="text-xl cursor-pointer hover:scale-110 transform duration-500"
                ><em>Github</em></h1>
            </Link>
        </div>
    )

}
export default MainHeader;