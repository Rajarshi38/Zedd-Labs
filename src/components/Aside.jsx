import { FiChevronDown, FiChevronLeft, FiChevronUp } from "react-icons/fi";
import roccat from "../assets/roccat.png";
import thermaltake from "../assets/thermaltake.png";
import hp from "../assets/hp.png";
import gigabyte from "../assets/gigabyte.png";
import msi from "../assets/msi.png";
import adata from "../assets/adata.png";
import MoreThings from "./MoreThings";

const brands = [
  {
    id: 1,
    image: roccat,
  },
  {
    id: 2,
    image: msi,
  },
  {
    id: 3,
    image: thermaltake,
  },
  {
    id: 4,
    image: adata,
  },
  {
    id: 5,
    image: hp,
  },
  {
    id: 6,
    image: gigabyte,
  },
];

const categories = [
  {
    id: 1,
    name: "CUSTOM PCS",
    value: 15,
  },
  {
    id: 2,
    name: "MSI ALL-IN-ONE PCS",
    value: 45,
  },
  {
    id: 3,
    name: "HP/COMPAQ PCS",
    value: 1,
  },
];

const prices = [
  {
    id: 1,
    name: "$0.00 - $1,000.00",
    value: 19,
  },
  {
    id: 2,
    name: "$1,000.00 - $2,000.00",
    value: 21,
  },
  {
    id: 3,
    name: "$2,000.00 - $3,000.00",
    value: 9,
  },
  {
    id: 4,
    name: "$3,000.00 - $4,000.00",
    value: 6,
  },
  {
    id: 5,
    name: "$4,000.00 - $5,000.00",
    value: 3,
  },
  {
    id: 6,
    name: "$5,000.00 - $6,000.00",
    value: 1,
  },
  {
    id: 7,
    name: "$6,000.00 - $7,000.00",
    value: 1,
  },
  {
    id: 8,
    name: "$7,000.00 And Above",
    value: 1,
  },
];

const Aside = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-0 cursor:pointer items-center">
        <span>
          <FiChevronLeft />
        </span>
        <span className="font-medium">Back</span>
      </div>
      <div className="bg-[#F5F7FF] flex flex-col py-4 px-5 gap-6">
        <div className="text-center">
          <h3 className="text-lg font-bold">Filters</h3>
        </div>
        <div className="text-center">
          <button className="border-2 border-[#A2A6B0] text-[#A2A6B0] w-full px-6 py-2 rounded-3xl font-semibold hover:bg-gray-100">
            Clear Filter
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">Category</h4>
            <span>
              <FiChevronUp />
            </span>
          </div>
          <div className="mt-3">
            {categories.map((category) => (
              <div
                className="flex justify-between text-[14px]"
                key={category.id}
              >
                <div>{category.name}</div>
                <div>{category.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">Price</h4>
            <span>
              <FiChevronUp />
            </span>
          </div>
          <div className="mt-3">
            {prices.map((price) => (
              <div className="flex justify-between text-[14px]" key={price.id}>
                <div>{price.name}</div>
                <div>{price.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Colors</h4>
            <span>
              <FiChevronUp />
            </span>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="w-6 h-6 rounded-full bg-black focus:outline focus:outline-blue-400"></button>
            <button className="w-6 h-6 rounded-full bg-red-600 focus:outline focus:outline-blue-400"></button>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">Apply Filters</h4>
            <span>
              <FiChevronDown />
            </span>
          </div>
          <div className="text-center my-4">
            <button className="px-6 w-full py-2 rounded-3xl bg-[#0156FF] text-white hover:bg-blue-600 transition font-semibold">
              Apply Filters(2)
            </button>
          </div>
        </div>
      </div>
      <div className="border border-[#F5F7FF]">
        <div className="bg-[#F5F7FF] flex flex-col px-5 py-4 gap-2">
          <h4 className="text-center text-lg font-bold">Brands</h4>
          <button className="border-2 border-[#A2A6B0] text-[#A2A6B0] font-semibold hover:gray-100 w-full px-6 py-[6px] rounded-3xl">
            All Brands
          </button>
        </div>
        <div className="grid grid-cols-2">
          {brands.map((brand) => (
            <img
              src={brand.image}
              alt={"brand"}
              key={brand.id}
              className="w-full"
            />
          ))}
        </div>
      </div>
      <MoreThings />
    </div>
  );
};

export default Aside;
