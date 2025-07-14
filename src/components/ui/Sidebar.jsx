// src/components/Sidebar.jsx
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { LuCalendarDays, LuUser } from "react-icons/lu";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 h-screen w-[386px] border-r border-[#3F3F46] bg-[#030303] z-10 font-poppins">
      <img src="/New-Xure-Logo.png" alt="Xure Logo" className="h-[41px] mt-[53px] ml-[55px]" />

      <div className="ml-[55px] mr-[30px] mt-[20px]">
        {/* Search Bar */}
        <div className="relative w-[251px] h-[40px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-full pl-10 pr-3 text-[12px] rounded-md border border-[#3F3F46] bg-[#18181B] text-white focus:outline-none focus:ring-2 focus:ring-[#CEAE7B]"
          />
        </div>

        {/* Main Menu */}
        <p className="text-[#71717A] font-bold text-[12px] mt-[30px]">Main Menu</p>
        <div className="flex flex-col gap-[30px] text-[14px] font-semibold mt-[20px]">
          <div
            className="flex items-center gap-3 text-white cursor-pointer hover:text-[#CEAE7B] transition-colors"
            onClick={() => navigate("/Xhibit")}
          >
            <FiMenu size={20} />
            <span>Xhibit</span>
          </div>

          <div
            className="flex items-center gap-3 text-white cursor-pointer hover:text-[#CEAE7B] transition-colors"
            onClick={() => navigate("/Xchange")}
          >
            <PiShoppingBagOpenBold size={22} />
            <span>Xchange</span>
          </div>

          <div
            className="flex items-center gap-3 text-white cursor-pointer hover:text-[#CEAE7B] transition-colors"
            onClick={() => navigate("/Xclusives")}
          >
            <LuCalendarDays size={22} />
            <span>Xclusives</span>
          </div>
        </div>

        {/* User Menu */}
        <p className="text-[#71717A] font-bold text-[12px] mt-[30px]">User Menu</p>
        <div className="text-white w-full mt-[20px]">
          <div
            className="flex items-center gap-3 mb-6 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <LuUser size={20} />
            <span className="text-[14px] font-semibold">Profile</span>
          </div>

          <button 
          onClick={() => navigate("/")}
          className="w-full bg-[#4C1D83] text-white text-[14px] font-semibold py-2 rounded-xl hover:bg-[#6B21A8] transition-colors cursor-pointer">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
