import {
  AiOutlineDown,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Brand from "../assets/brand-responsive.png";

export default function ResponsiveHeader() {
  return (
    <header id="responsive-header">
      <div className="py-3 text-[10px] bg-[#020202] text-white flex justify-end gap-3 pr-4 items-center">
        <div className="flex items-center gap-[3px]">
          <div className="block text-[#A2A6B0]">Mon-Thu:</div>{" "}
          <span className="font-medium">9:00 AM - 5.30 AM</span>
          <span className="">
            <AiOutlineDown size={10} className="mb-[3px]" />
          </span>
        </div>
        <div className="mb-[4px]">
          <span className="font-semibold border-b-[2px] border-b-white ">
            Contact Us
          </span>
        </div>
      </div>
      <nav className="bg-[#0156FF] text-white py-4 px-3 relative">
        <img
          src={Brand}
          alt="brand"
          className="absolute top-[-35px] left-[16px] z-[-111px]"
        />
        <div className="flex items-center justify-between">
          <div>
            <AiOutlineMenu size={18} />
          </div>
          <div className="relative w-[70%]">
            <AiOutlineSearch
              className="absolute z-10 text-[#CACDD8] top-[6px] left-[6px]"
              size={20}
            />
            <input
              type="text"
              placeholder="Search Here"
              className="pl-[30px] py-[7px] w-full text-sm bg-white rounded-3xl border-none focus:border-none focus-within:outline-none text-black"
            />
          </div>
          <div className="flex gap-1">
            <div>
              <AiOutlineShoppingCart size={24} />
            </div>
            <div>
              <CgProfile size={24} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
