import { useState, useEffect } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import useXclusivesStore from '@/store/XclusivesStore';
import ShimmerBoxBreak from "./ShimmerBoxBreak";

function BoxBreaking() {
  const [activeToggle, setActiveToggle] = useState("All");
  const {card, fetchItems, isLoading} = useXclusivesStore();

  useEffect(() => {
      fetchItems();
    }, [fetchItems]);

  return (
    <div className="pb-[50px]">
      <div className="w-[1020px] h-[200px] bg-white rounded-md overflow-hidden mb-[20px]">
        <img
          src="/boxbreaking.jpg"
          alt="Box Breaking"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-bold text-white text-[18px] mb-[30px]">Box Breaking</p>

      {/* Filter + Search + Toggles */}
      <div className="flex flex-row w-[1020px] h-[50px] items-center gap-4">
        {/* filter button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-white text-[16px] font-semibold cursor-pointer hover:text-[#CEAE7B] transition-colors">
            <FiFilter size={20} />
            <span>Filter</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative w-[440px] h-[40px]">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="search"
            placeholder="Tell us what you are looking for..."
            className="w-full h-full pl-10 pr-3 text-[12px] rounded-md border border-[#3F3F46] bg-[#18181B] text-white focus:outline-none focus:ring-2 focus:ring-[#CEAE7B]"
          />
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-2 w-[500px] h-[40px] bg-[#18181B] p-1 rounded-md">
          {["All", "Past", "Joined"].map((label) => (
            <button
              key={label}
              onClick={() => setActiveToggle(label)}
              className={` w-full h-[30px] cursor-pointer text-[12px] font-medium rounded-md transition-all duration-200 ${
                activeToggle === label
                  ? "bg-[#CEAE7B] text-black"
                  : "text-white hover:bg-[#2c2c2c]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
      </div>

    {/* Box breaking cards container */}
<div className="w-[1020px] grid grid-cols-2 gap-4 mt-[20px]">
  {/* Card */}
  {isLoading
              ? Array(8).fill().map((_, index) => <ShimmerBoxBreak key={card.id}/>)
              : card.map((card) => (
    <div
      key={card.id}
      className="bg-[#18181B] rounded-md h-[380px] overflow-hidden shadow-md hover:scale-[105%] transition-all cursor-pointer flex flex-col"
    >
      <div className="h-[200px] w-full">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" text-white ml-[20px]">
        <h3 className="text-[16px] font-bold mb-1 truncate">{card.title}</h3>

        <div className="flex items-center justify-between mt-3 mr-[20px]">
            {/* Avatar + Host Name */}
            <div className="flex items-center gap-2">
                {/* Round Avatar with outline */}
                <div className="w-7 h-7 rounded-full border-2 border-[#CEAE7B] overflow-hidden">
                <img
                    src="/hostpfp.jpg"
                    alt="Host"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Host Text */}
                <p className="text-[12px] text-[#D4D4D4]">{card.host}</p>
            </div>

            {/* Circular Badge on Right */}
            <div className="w-[105px] h-[25px]  rounded-full outline-[2px] outline-[#CEAE7B] flex items-center justify-center text-[10px] font-semibold text-[#CEAE7B]">
                {card.breakingtype}
            </div>
        </div>

        <div className="flex items-center justify-between mr-[20px] mt-[10px]">
            <p className="text-[16px] font-bold text-[#CEAE7B]">
                PHP {Number(card.startprice).toLocaleString()} – PHP {Number(card.maxprice).toLocaleString()}
            </p>
            <div className="w-[105px] h-[25px] rounded bg-[#27272A] flex items-center justify-center text-[10px] font-semibold text-[#CEAE7B]">
                {card.slot}
                <span className="text-white">/</span>
                <span className="text-[#A1A1AA] mr-[2px]">{card.maxslot}</span> Breaks Left
            </div>
            </div>


        <div className="flex items-center justify-between mt-[10px] mr-[20px] ">
            <div className="w-[220px] h-[60px] bg-[#27272A] rounded-md text-[12px] flex justify-center items-center flex-col">
                <p>Registration Start:</p>
                <p className="font-bold">{card.start}</p>
            </div>
            <div className="w-[220px] h-[60px] bg-[#27272A] rounded-md text-[12px] flex justify-center items-center flex-col">
                <p>Registration End:</p>
                <p className="font-bold">{card.end}</p>
            </div>
        </div>
       

      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default BoxBreaking;
