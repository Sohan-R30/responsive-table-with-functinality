import { MdAdminPanelSettings } from "react-icons/md"
import { PiHashStraightBold } from "react-icons/pi"
import { FiSettings } from "react-icons/fi"
import V from "../assets/V.png"
const LeftSideBar = () => {
    return (
        <div className="text-3xl flex flex-col items-center justify-between h-full min-h-screen py-10 mx-auto px-10 shadow-xl max-w-[70px]  sm:max-w-[100px] border-r bg-white">
            <div className="flex items-center flex-col gap-12">
                <div>
                    <img className="w-10" src={V} alt="logo" />
                </div>
                <p className="border rounded-md p-2 gradientColor text-white"> <MdAdminPanelSettings /></p>
                <p className="text-[#667085]"><PiHashStraightBold /></p>
            </div>
            <div>
                <p className="text-[#727b8f]"><FiSettings/></p>
            </div>
        </div>
    );
};

export default LeftSideBar;