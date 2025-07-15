import { useEffect } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { FiSearch, FiGrid, FiFilter } from 'react-icons/fi';
import useXchangeStore from '@/store/XchangeStore';
import ShimmerCard from './components/ShimmerCard';

function Xchange() {
  const { items, isLoading, fetchItems } = useXchangeStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <title>Xure App | The Xchange</title>
      <Sidebar />

      <div className="ml-[386px] p-6">
        <div className="p-[20px]">
          <p className="text-[24px] font-bold">The Xchange</p>

          {/* Header */}
          <div className="flex flex-row">
            <div className="relative w-[660px] h-[40px] mt-[35px]">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="search"
                placeholder="Tell us what you are looking for..."
                className="w-full h-full pl-10 pr-3 text-[14px] rounded-md border border-[#3F3F46] bg-[#18181B] text-white focus:outline-none focus:ring-2 focus:ring-[#CEAE7B]"
              />
            </div>

            <div className="flex items-center gap-2 ml-[25px] mt-[35px]">
              <div className="flex items-center gap-2 text-white text-[14px] font-semibold cursor-pointer hover:text-[#CEAE7B] transition-colors">
                <FiGrid size={20} />
                <span>All</span>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-[25px] mt-[35px]">
              <div className="flex items-center gap-2 text-white text-[14px] font-semibold cursor-pointer hover:text-[#CEAE7B] transition-colors">
                <FiFilter size={20} />
                <span>Filter</span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mt-[30px] min-h-[340px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] p-[5px]">
            {isLoading
              ? Array(8).fill().map((_, index) => <ShimmerCard key={index} />)
              : items.length === 0 ?(
                <div className="w-[1020px] flex justify-center items-center text-white text-sm font-medium min-h-[200px]">
                  No items found.
                </div>
              ) :  items.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-[#18181B] h-[360px] w-full rounded-2xl overflow-hidden hover:scale-[105%] transition-all cursor-pointer"
                  >
                    <div className="h-[230px] w-full bg-white flex items-center justify-center overflow-hidden rounded-2xl">
                      <img
                        src={item.img}
                        alt="Item"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="p-[10px] flex flex-col pl-[15px] pb-[60px]">
                      <p className="text-[18px] font-bold text-[#CEAE7B] font-poppins">
                        PHP {Number(item.price).toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p className="text-[#71717A] font-semibold text-[12px]">{item.type}</p>
                      <p className="text-white font-semibold text-[15px] truncate">{item.title}</p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full px-[15px] pb-[15px]">
                      <div className="flex items-center justify-between bg-[#18181B] w-full">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.pfp}
                            alt="Avatar"
                            className="w-[25px] h-[25px] rounded-full object-cover"
                          />
                          <p className="text-[12px] font-medium text-[#D9D9D9]">{item.poster}</p>
                        </div>
                        <div className="bg-[#111827] flex items-center justify-center text-[#CEAE7B] w-[60px] h-[20px] text-[10px] font-medium outline outline-[1px] outline-[#CEAE7B]">
                          Xstore
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xchange;
