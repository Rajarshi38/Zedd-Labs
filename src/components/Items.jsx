import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import laptop1 from "../assets/laptop-1.png";
import laptop2 from "../assets/laptop-2.png";
import laptop3 from "../assets/laptop-3.png";
import laptop4 from "../assets/laptop-4.png";
import laptop5 from "../assets/laptop-5.png";
import laptop6 from "../assets/laptop-6.png";
import Pagination from "./Pagination";

const laptopImages = [laptop1, laptop2, laptop3, laptop4, laptop5, laptop6];

function generateRandomImage() {
  const idx = Math.floor(Math.random() * laptopImages.length);
  return laptopImages[idx];
}

const generateLaptops = () => {
  const laptops = [];

  for (let i = 0; i < 20; i++) {
    laptops.push({
      id: i + 1,
      image: generateRandomImage(),
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      reviews: 4,
      price: 499.0,
      inStock: true,
      stars: 4,
    });
  }

  return laptops;
};

const laptops = generateLaptops();

const Items = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {laptops.map((laptop) => (
          <div className="relative flex flex-col p-2 gap-[6px]" key={laptop.id}>
            <span className="flex items-center text-[12px] md:text-[15px] gap-1 text-[#78A962]">
              <AiFillCheckCircle />
              in stock
            </span>
            <div className="self-center">
              <img src={laptop.image} alt={`laptop-${laptop.id}`} />
            </div>
            <div className="flex items-center gap-3 self-start">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span>
                      <AiFillStar
                        color={index < laptop.stars ? "#E9A426" : "#CACDD8"}
                      />
                    </span>
                  ))}
              </div>
              <div className="text-[10px] text-[#A2A6B0] md:text-[13px]">
                Reviews ({laptop.reviews.toPrecision(2)})
              </div>
            </div>
            <div>
              <p className="text-[13px] self-start md:text-[17px]">
                {laptop.name}
              </p>
            </div>
            <div className="self-start">
              <s className="text-[12px] text-[#666666] md:text-[14px]">
                ${laptop.price.toFixed(2)}
              </s>
              <div className="text-[14px] md:text-base">
                ${laptop.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Items;
