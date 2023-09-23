import Hero from "../assets/Hero.jpg";
const HeroImage = () => {
  return (
    <div>
      <img src={Hero} alt="hero" className="w-full" />
    </div>
  );
};

export default HeroImage;
