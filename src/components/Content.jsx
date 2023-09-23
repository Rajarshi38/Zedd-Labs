import { FiChevronDown } from "react-icons/fi";
import Items from "./Items";
import Aside from "./Aside";
const Content = () => {
  return (
    <div>
      <div className="flex gap-[6px]">
        <aside className="basis-64">
          <Aside />
        </aside>
        <div className="flex-1">
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

          <div>
            <span className="text-[10px] text-[#A2A6B0]">Items 1-35 of 61</span>
          </div>

          <div>
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
