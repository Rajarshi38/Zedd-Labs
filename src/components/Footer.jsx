import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import PaypalCard from "../assets/paypal.png";
import VisaCard from "../assets/visa.png";
import MaestroCard from "../assets/maestro.png";
import DiscoverCard from "../assets/discover.png";
import AmericanExpress from "../assets/american-express.png";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const footerCards = [
  {
    id: 1,
    src: PaypalCard,
    alt: "paypal",
  },
  {
    id: 2,
    src: VisaCard,
    alt: "visa",
  },
  {
    id: 3,
    src: MaestroCard,
    alt: "maestro",
  },
  {
    id: 4,
    src: DiscoverCard,
    alt: "discover",
  },
  {
    id: 5,
    src: AmericanExpress,
    alt: "american-express",
  },
];

const footerParts = [
  {
    id: 1,
    part_type: "Information",
    sub_parts: [
      "About Us",
      "About Zip",
      "Privacy policy",
      "Search",
      "Terms",
      "Orders and Returns",
      "Contact Us",
      "Advanced Search",
      "Newsletter Subscription",
    ],
  },
  {
    id: 2,
    part_type: "PC Parts",
    sub_parts: [
      "CPUS",
      "Add On Cards",
      "Hard Drives (Internal)",
      "Graphic Cards",
      "Keyboards / Mice",
      "Cases / Power Supplies / Cooling",
      "RAM (Memory)",
      "Software",
      "Speakers / Headsets",
      "Motherboards",
    ],
  },
  {
    id: 3,
    part_type: "Desktop PCs",
    sub_parts: [
      "Desktop PCs",

      "Custom PCs",
      "Servers",
      "MSI All-In-One PCs",
      "HP/Compaq PCs",
      "ASUS PCs",
      "Tecs PCs",
    ],
  },
  {
    id: 4,
    part_type: "Laptops",
    sub_parts: [
      "Everyday Use Notebooks",
      "MSI Workstation Series",
      "MSI Prestige Series",
      "Tablets and Pads",
      "Netbooks",
      "Infinity Gaming Notebooks",
    ],
  },
  {
    id: 5,
    part_type: "Address",
    sub_parts: [
      "Address: 1234 Street Adress City Address, 1234",
      <Fragment key={crypto.randomUUID()}>
        Phones:{" "}
        <span className="cursor-pointer text-blue-500">(00) 1234 5678</span>
      </Fragment>,
      "We are open: Monday-Thursday: 9:00 AM - 5:30 PM",
      "Friday: 9:00 AM - 6:00 PM",
      "Saturday: 11:00 AM - 5:00 PM",
      <Fragment key={crypto.randomUUID()}>
        E-mail:{" "}
        <span className="text-blue-500 cursor-pointer">shop@email.com</span>
      </Fragment>,
    ],
  },
];

const FooterParts = () => {
  return (
    <div className="flex flex-col justify-start md:flex-row md:justify-between">
      {footerParts.map((part) => {
        return <FooterPart key={part.id} part={part} />;
      })}
    </div>
  );
};

const FooterPart = ({ part }) => {
  const [visible, setVisible] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) setVisible(true);
  }, [isDesktop]);

  const handleSubPartOpen = () => {
    setVisible(true);
  };

  const handleSubPartClose = () => {
    setVisible(false);
  };

  return (
    <div key={part.id} className="">
      <div className="flex items-center justify-between border-b border-b-white md:border-none my-4 pb-2">
        <h3 className="text-white text-[14px] md:text-[17px] font-medium md:text-[#818181]">
          {part.part_type}
        </h3>
        <span className="md:hidden">
          {!visible ? (
            <AiOutlineDown size={12} onClick={handleSubPartOpen} />
          ) : (
            <AiOutlineUp size={12} onClick={handleSubPartClose} />
          )}
        </span>
      </div>
      <ul
        className={`pl-[10px] md:pl-0 border-b border-b-white md:border-none pb-2 ${
          visible ? "block" : "hidden"
        }`}
      >
        {part.sub_parts.map((sub_part) => (
          <li
            key={crypto.randomUUID()}
            className="mb-[8px] text-[12px] md:text-[14px]"
          >
            {sub_part}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const availableCardsSections = (
    <div className="flex gap-3 justify-center">
      {footerCards.map((card) => (
        <img key={card.id} src={card.src} alt={card.alt} />
      ))}
    </div>
  );
  return (
    <footer id="footer" className="w-full text-white py-10 bg-black ">
      <div className="container mx-auto flex flex-col gap-12 px-8 md:px-0">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-end">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold mb-1 md:mb-3 text-center md:text-start">
              Sign Up To Our Newsletter
            </h2>
            <p className="text-center md:text-start text-[12px] md:text-[14px]">
              Be the first to hear about the latest offers
            </p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="email"
              name="email"
              className="px-3 py-2 md:py-3 w-[200px] md:w-full text-[12px] md:text-[14px] bg-transparent rounded-md border-[2px] border-gray-100"
              placeholder="Your Email"
            />
            <button
              type="button"
              className="text-[12px] md:text-base bg-blue-700 rounded-3xl px-4 md:px-5 py-2 md:py-3 font-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
        <FooterParts />
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-6 justify-between items-center border-t border-t-gray-600 pt-3">
            {/* social media */}
            <div className="flex gap-1 md:gap-4">
              <span>
                <AiFillFacebook size={18} color="#818181" />
              </span>
              <span>
                <AiFillInstagram size={18} color="#818181" />
              </span>
            </div>
            {/* Cards */}
            {isDesktop && availableCardsSections}
            {/* Copyright */}
            <div className="order-2 md:order-3 float-right">
              <span className="text-[#818181] text-[10px]">
                Copyright © 2020 Shop Pty. Ltd.
              </span>
            </div>
          </div>
          {!isDesktop && availableCardsSections}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
