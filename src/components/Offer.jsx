import { BiSupport, BiUserCircle } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";

const offers = [
  {
    id: 1,
    title: "Product Support",
    sub_title:
      "Up to 3 years on-site warranty available for your peace of mind.",
    icon: (size) => <BiSupport size={size} />,
  },
  {
    id: 2,
    title: "Personal Account",
    sub_title:
      "With big discounts, free delivery and a dedicated support specialist.",
    icon: (size) => <BiUserCircle size={size} />,
  },
  {
    id: 3,
    title: "Amazing Savings",
    sub_title: "Up to 70% off new Products, you can be sure of the best price.",
    icon: (size) => <AiFillTag size={size} />,
  },
];

const Offer = () => {
  return (
    <div className="flex flex-col gap-8 py-6 mt-12 bg-[#F5F7FF] px-6">
      {offers.map((offer) => (
        <div className="flex flex-col items-center" key={offer.id}>
          <div className="rounded-full bg-blue-500 p-4 text-white">
            {offer.icon(25)}
          </div>
          <div className="font-bold">{offer.title}</div>
          <div className="text-center text-[12px]">{offer.sub_title}</div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
