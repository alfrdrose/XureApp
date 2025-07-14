import Sidebar from '@/components/ui/Sidebar';
import BoxBreaking from './components/BoxBreaking';
import { useState } from 'react';

function Xclusives() { 
    const [activeToggle, setActiveToggle] = useState('A');

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            <title>Xure App | The Xclusives</title>
            <Sidebar />

            <div className="ml-[386px] p-6">
                <div className="p-[20px] ">
                    <p className="text-[24px] font-bold">The Xclusives</p>
                    {/* Toggle bar */}
                    <div className="w-full h-[50px]  bg-[#18181B] text-[14px] rounded-full mt-4 outline-[1px] outline-[#3F3F46] p-[10px]">
                        <div className="flex w-full h-[30px]">
                            <button
                            onClick={() => setActiveToggle("A")}
                            className={`cursor-pointer w-1/2 rounded-md transition-all duration-200 font-medium ${
                                activeToggle === "A"
                                ? "bg-[#CEAE7B] text-black"
                                : "text-white hover:bg-[#2c2c2c]"
                            }`}
                            >
                            Box Breaking
                            </button>
                            <button
                            onClick={() => setActiveToggle("B")}
                            className={`cursor-pointer  w-1/2 rounded-md transition-all duration-200 font-medium ${
                                activeToggle === "B"
                                ? "bg-[#CEAE7B] text-black"
                                : "text-white hover:bg-[#2c2c2c]"
                            }`}
                            >
                            Giveaways
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-[30px] min-h-[340px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] p-[5px]">
                        {activeToggle === "A" ? (
                            <>
                                {/* Box Breaking Content */}
                                <BoxBreaking />
                            </>
                        ) : (
                            <>
                                {/* Giveaways Content */}
                                <div className="bg-[#18181B] h-[360px] w-[1020px] rounded-2xl flex items-center justify-center">
                                    <p className="text-white">Xclusive Promo is expired.</p>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default Xclusives;