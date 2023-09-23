import chair from "../assets/chair.png";

const MoreThings = () => {
  return (
    <>
      {/* Compare Product */}
      <div className="bg-[#F5F7FF] flex items-center flex-col text-center px-5 py-4">
        <h4 className="font-bold text-lg">Compare Products</h4>
        <p className="text-sm">You have no items to compare</p>
      </div>
      {/* Wishlist */}
      <div className="bg-[#F5F7FF] items-center text-center px-5 py-6">
        <h4 className="font-bold text-lg">My Wish Lists</h4>
        <p className="text-sm">You have no items in your wish list.</p>
      </div>
      <div>
        <img src={chair} alt="chair" className="w-full" />
      </div>
    </>
  );
};

export default MoreThings;
