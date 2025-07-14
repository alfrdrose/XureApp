import { Input } from "@/components/ui/input";
import { FiSearch, FiMenu, FiShare2 } from "react-icons/fi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { LuCalendarDays, LuUser } from "react-icons/lu";
import { FaCheckDouble, FaRegComment, FaBell } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import usePostStore from "@/store/postStore";
import Sidebar from "@/components/ui/Sidebar";

import ShimmerPost from "./components/ShimmerPost"; // Assuming you have a ShimmerPost component for loading state



function Xhibit() {
  const [showFull, setShowFull] = useState(false);
  const { xchange, accounts, posts, loadMorePosts, isLoading,  fetchItems } = usePostStore();
  const loadMoreRef = useRef();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen w-full flex overflow-x-hidden relative">
      <title>Xure App | The Xhibit</title>
      <Sidebar />

      <div className="ml-[386px] mr-[373px] flex-grow min-h-screen bg-[#030303] overflow-x-hidden">
        <div className="w-full flex justify-start ml-[35px] mt-[30px] mb-[20px]">
          <p className="text-[24px] font-bold text-white">The Xhibit</p>
        </div>

        <div className="flex flex-col gap-6 w-[90%] mx-auto">
          {isLoading ? (
            <>
              <ShimmerPost />
              <ShimmerPost />
              <ShimmerPost />
            </>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#18181B] rounded-lg p-[30px] max-w-[720px] w-full"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-[#3F3F46] flex items-center justify-center">
                    <img src={post.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <p className="text-[#CEAE7B] text-[16px] font-semibold">{post.username}</p>
                      <p className="text-white text-[12px] mt-[-2px]">{post.followers} Followers</p>
                    </div>
                    <button className="h-[26px] w-[102px] bg-[#4C1D83] text-white text-[11px] font-semibold rounded px-4 hover:bg-[#6B21A8] transition-colors mt-[2px] cursor-pointer">
                      Follow
                    </button>
                  </div>
                </div>

                <div className="text-white text-[13px] mt-4 leading-[1.4]">
                  <span>
                    {showFull
                      ? post.caption
                      : `${post.caption.slice(0, 120)}${post.caption.length > 120 ? "..." : ""}`}
                  </span>
                  {post.caption.length > 120 && (
                    <button
                      onClick={() => setShowFull(!showFull)}
                      className="ml-1 text-[#CEAE7B] font-medium cursor-pointer"
                    >
                      {showFull ? "See less" : "See more"}
                    </button>
                  )}
                </div>

                <div className="mt-4 w-full aspect-video rounded-lg overflow-hidden bg-[#0F0F10]">
                  {post.type === "image" ? (
                    <img src={post.mediaUrl} alt="media" className="w-full h-full object-cover" />
                  ) : (
                    <video controls className="w-full h-full object-cover">
                      <source src={post.videoUrl} type="video/mp4" />
                    </video>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4 text-white text-[13px]">
                  <span>
                    Hyped by <span className="font-semibold">{post.hype}</span> People
                  </span>
                </div>

                <div className="my-4 border-[#3F3F46] border-[1px]" />

                <div className="flex items-center justify-between text-white text-[13px]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#CEAE7B] transition-colors">
                    <FaCheckDouble size={14} />
                    <span>Hype</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#CEAE7B] transition-colors">
                    <FaRegComment size={14} />
                    <span>Comment</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#CEAE7B] transition-colors">
                    <FiShare2 size={14} />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={loadMoreRef} className="h-10 w-full"></div>
        </div>
      </div>

      {/* Right Panel remains unchanged */}
      <div className="fixed right-0 top-0 h-screen w-[373px] border-l border-[#3F3F46] bg-[#030303] z-10 flex flex-col items-center">
        {/* Upload and profile area */}
        <div className="w-[320px] mt-[30px] flex items-center justify-between">
          <button className="w-[122px] h-[35px] bg-[#4C1D83] text-white text-[14px] font-semibold rounded hover:bg-[#6B21A8] transition-colors cursor-pointer">
            Upload
          </button>
          <FaBell size={20} className="text-white" />
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#3F3F46] flex items-center justify-center">
            <img
              src="https://ui-avatars.com/api/?background=3F3F46&color=fff&name=U"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Accounts */}
        <div className="flex justify-start w-[320px] mt-[20px]">
          <p className="text-[16px] font-bold text-[#CEAE7B]">Find & Follow</p>
        </div>

        <div className="bg-[#18181B] w-[320px] min-h-[220px] mt-[10px] rounded-md">
          <div className="flex flex-col space-y-[20px] p-[20px]">
            {accounts.map((accounts) => (
              <div key={accounts.id} className="flex flex-row justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#3F3F46] flex items-center justify-center">
                    <img
                      src={accounts.profile}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-[12px] text-[#CEAE7B]">{accounts.name}</p>
                    <p className="text-[10px] text-white">{accounts.acttag}</p>
                  </div>
                </div>
                <button className="w-[89px] h-[26px] bg-[#4C1D83] text-white text-[10px] font-semibold rounded hover:bg-[#6B21A8] transition-colors cursor-pointer">
                  Follow
                </button>
              </div>
            ))}
            <p className="text-[12px] font-bold text-[#CEAE7B] cursor-pointer transition-colors hover:opacity-[80%]">
              See more...
            </p>
          </div>
        </div>

        {/* Xchange Items */}
        <div className="flex justify-start w-[320px] mt-[20px]">
          <p className="text-[16px] font-bold text-[#CEAE7B]">Xchange Hot Items</p>
        </div>

        <div className="min-h-[220px] w-[320px] mt-[10px] flex flex-row gap-[40px] overflow-x-auto">
          {xchange.map((xchange) => (
            <div key={xchange.id} className="w-[150px] h-[235px] bg-[#18181B] rounded-md">
              <div className="h-[120px] w-full rounded-t-md overflow-hidden bg-white">
                <img
                  src={xchange.img}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[10px]">
                <p className="text-[14px] font-bold text-[#CEAE7B] font-poppins">
                  PHP {Number(xchange.price).toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-[#71717A] font-semibold text-[10px]">{xchange.type}</p>
                <p className="text-white font-semibold text-[12px]">{xchange.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start w-[100%] ml-[50px] mt-[10px]">
          <p className="text-[12px] font-bold text-[#CEAE7B] cursor-pointer transition-colors hover:opacity-[80%]">
            See more...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Xhibit;
