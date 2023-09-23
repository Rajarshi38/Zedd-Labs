import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <div id="pagination" className="flex gap-[5px] my-6 justify-center">
      <button className="pagination-btn">
        <FiChevronLeft className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
      </button>
      <button className="pagination-btn px-[16px]">1</button>
      <button className="pagination-btn px-[16px] border-none bg-[#F5F7FF] text-black">
        2
      </button>
      <button className="pagination-btn px-[16px]">3</button>
      <div className="self-end mx-2 text-[#A2A6B0]">...</div>
      <button className="pagination-btn px-[16px]">15</button>
      <button className="pagination-btn">
        <FiChevronRight className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
      </button>
    </div>
  );
};

export default Pagination;
