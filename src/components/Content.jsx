import { FiChevronDown, FiAlignLeft } from "react-icons/fi";
import { IoMdApps } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

import Items from "./Items";
import Aside from "./Aside";
import { useMediaQuery } from "../hooks/useMediaQuery";
import MoreSection from "./MoreSection";
import MoreThings from "./MoreThings";

const Content = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <div className="flex gap-[15px]">
        {isDesktop && (
          <aside className="basis-64 ">
            <Aside />
          </aside>
        )}
        <div className="flex flex-col gap-3 flex-1">
          {!isDesktop && (
            <div className="flex flex-1 w-full gap-[10px]">
              <button className="px-4 flex-1 text-[10px] font-medium py-2 border border-[#CACDD8] rounded-sm">
                Filter
              </button>
              <button className="border flex-1 px-2 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                <div className="flex items-center justify-between ">
                  <span>Sort By: Position</span>
                  <span>
                    <FiChevronDown />
                  </span>
                </div>
              </button>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div>
              <span className="text-[10px] md:text-[14px] text-[#A2A6B0]">
                Items 1-35 of 61
              </span>
            </div>
            {isDesktop && (
              <div className="flex gap-1 items-center">
                <button className="border gap-2 flex items-center px-4 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                  <span>Sort By: Position</span>
                  <span className="mb-[2px]">
                    <FiChevronDown />
                  </span>
                </button>
                <button className="border flex items-center gap-2 px-2 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                  <span className="text-[10px] font-semibold">
                    <span className="text-[#A2A6B0]">Show:</span>35 per page
                  </span>
                  <span className="mb-[2px]">
                    <FiChevronDown />
                  </span>
                </button>
                <div>
                  <IoMdApps size={25} />
                </div>
                <div>
                  <FiAlignLeft size={25} color="#A2A6B0" />
                </div>
              </div>
            )}
          </div>
          {isDesktop && (
            <div className="flex gap-2">
              <button className="border gap-2 flex items-center px-4 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                <span>
                  CUSTOM PCS <span>(24)</span>
                </span>
                <span className="mb-[2px]">
                  <AiFillCloseCircle size={18} color="#C94D3F" />
                </span>
              </button>
              <button className="border gap-2 flex items-center px-4 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                <span>
                  HP/COMPAQ PCS <span>(24)</span>
                </span>
                <span className="mb-[2px]">
                  <AiFillCloseCircle size={18} color="#C94D3F" />
                </span>
              </button>
              <button className="border gap-2 items-center px-4 border-[#CACDD8] rounded-sm py-2 text-[10px] font-medium">
                Clear All
              </button>
            </div>
          )}

          <div>
            <Items />
          </div>
          {!isDesktop && <MoreThings />}
          <MoreSection />
        </div>
      </div>
    </div>
  );
};

export default Content;
