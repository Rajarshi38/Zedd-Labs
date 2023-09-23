import { AiFillFacebook, AiFillInstagram, AiOutlineDown } from "react-icons/ai";
import BrandLogo from "../assets/Logo.png";
import SearchIcon from "../assets/search.svg";
import CartLogo from "../assets/Cart.svg";
import ProfileLogo from "../assets/Profile.png";

const Header = () => {
  return (
    <header id="header" className="w-full">
      {/* Offer section */}
      <div className="bg-[#020202] text-white py-2 text-[14px]">
        <div className="mx-auto container flex justify-between">
          <div className="flex items-center gap-1">
            <div className="block text-[#A2A6B0]">Mon-Thu:</div>{" "}
            <span>9:00 AM - 5.30 AM</span>
            <span className="">
              <AiOutlineDown className="w-3 h-3" />
            </span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="text-[#A2A6B0]">
              Visit our showroom in 1234 Street Address City Adress,1234{" "}
            </span>
            <span className="font-semibold border-b-[2px] border-b-white ">
              Contact Us
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>Call Us: (00) 1234 5678</span>
            <div className="flex gap-1">
              <span>
                <AiFillFacebook size={18} />
              </span>
              <span>
                <AiFillInstagram size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* main navbar */}
      <nav className="border-b border-b-[#CACDD8] py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div>
            <img src={BrandLogo} alt="brand" />
          </div>
          <div className="flex gap-8 font-medium items-center">
            <span>Laptops</span>
            <span>Desktop PCs</span>
            <span>Networking Devices</span>
            <span>Printers & Scanners</span>
            <span>PC Parts</span>
            <span>All Other Products</span>
            <span>Repairs</span>
            <button className="font-semibold border-2 border-blue-600 px-4 py-2 text-blue-600 rounded-3xl">
              Our Deals
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="mt-2">
              <img src={SearchIcon} alt="search" />
            </div>
            <div className="">
              <img src={CartLogo} alt="cart" />
            </div>
            <div>
              <img src={ProfileLogo} alt="profile" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
