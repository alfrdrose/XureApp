function ShimmerBoxBreak() {
  return (
    <div className="bg-[#18181B] rounded-md h-[380px] overflow-hidden shadow-md animate-pulse">
      {/* Top Image Placeholder */}
      <div className="h-[200px] w-full bg-[#CEAE7B]" />

      <div className="text-white px-[20px] py-[10px] space-y-4">
        {/* Title */}
        <div className="h-[16px] bg-[#CEAE7B] rounded w-3/4 shimmer-bg" />

        {/* Avatar and Host */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#CEAE7B]" />
            <div className="h-[12px] w-[80px] bg-[#CEAE7B] rounded shimmer-bg" />
          </div>
          <div className="w-[105px] h-[25px] rounded-full bg-[#CEAE7B]" />
        </div>

        {/* Price + Breaks Left */}
        <div className="flex items-center justify-between">
          <div className="h-[16px] w-[160px] bg-[#CEAE7B] rounded shimmer-bg" />
          <div className="w-[105px] h-[25px] rounded bg-[#CEAE7B]" />
        </div>

        {/* Registration Info */}
        <div className="flex items-center justify-between">
          <div className="w-[220px] h-[60px] bg-[#CEAE7B] rounded-md" />
          <div className="w-[220px] h-[60px] bg-[#CEAE7B] rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default ShimmerBoxBreak;
