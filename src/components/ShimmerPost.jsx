function ShimmerPost() {
  return (
    <div className="animate-pulse bg-[#18181B] rounded-lg p-[30px] max-w-[720px] w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[52px] h-[52px] rounded-full bg-[#CEAE7B]" />
        <div className="flex-1 space-y-2">
          <div className="w-[150px] h-[12px] bg-[#CEAE7B] rounded" />
          <div className="w-[100px] h-[10px] bg-[#CEAE7B] rounded" />
        </div>
      </div>
      <div className="w-full h-[60px] bg-[#CEAE7B] rounded mb-4" />
      <div className="w-full h-[240px] bg-[#0F0F10] rounded mb-4" />
      <div className="flex justify-between">
        <div className="w-[60px] h-[14px] bg-[#CEAE7B] rounded" />
        <div className="w-[60px] h-[14px] bg-[#CEAE7B] rounded" />
        <div className="w-[60px] h-[14px] bg-[#CEAE7B] rounded" />
      </div>
    </div>
  );
}
export default ShimmerPost;