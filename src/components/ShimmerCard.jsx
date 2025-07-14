function ShimmerCard() {
  return (
    <div className="relative bg-[#18181B] h-[360px] w-full rounded-2xl overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="h-[230px] w-full bg-[#2a2a2a]"></div>

      {/* Content Placeholder */}
      <div className="p-[10px] pl-[15px] pb-[60px] space-y-2">
        <div className="h-[20px] w-[80%] bg-[#CEAE7B] rounded"></div>
        <div className="h-[14px] w-[50%] bg-[#CEAE7B] rounded"></div>
        <div className="h-[16px] w-[90%] bg-[#CEAE7B] rounded"></div>
      </div>

      {/* Bottom Avatar/Button Placeholder */}
      <div className="absolute bottom-0 left-0 w-full px-[15px] pb-[15px]">
        <div className="flex items-center justify-between bg-[#18181B] w-full">
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px] rounded-full bg-[#CEAE7B]"></div>
            <div className="h-[12px] w-[100px] bg-[#CEAE7B] rounded"></div>
          </div>
          <div className="w-[60px] h-[20px] bg-[#CEAE7B] rounded"></div>
        </div>
      </div>
    </div>
  );
}
export default ShimmerCard;