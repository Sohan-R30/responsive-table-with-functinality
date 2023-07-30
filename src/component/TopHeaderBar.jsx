import user from "../assets/user.png"
import { FaAngleDown } from "react-icons/fa"
const TopHeaderBar = () => {
    return (
        <div className="flex items-center min-w-full min-h-[80px] border-b fixed left-[80px] sm:left-[100px] bg-white">
            <div className="fixed right-5 sm:right-20">
                <div className="relative flex items-center gap-3 bg-[#f9fafb] pl-3 pr-10 py-2 rounded-l-full rounded-r-full">
                    {/* <img className="w-12" src={user} alt="user" /> */}
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={user} alt="profile image" />
                    </div>
                    <div className="">
                        <p>Name</p>
                        <p className="text-xs">Brand</p>
                    </div>
                    <p className="absolute right-3 top-1/3"><FaAngleDown/></p>
                </div>
            </div>
        </div>
    );
};

export default TopHeaderBar;