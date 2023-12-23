import { motion } from "framer-motion";

const Banner = () => {
  const hoverAnimation = {
    hover: {
      scale: 1.5, // Scale the image to 110% on hover
      transition: { duration: 0.2 },
    },
    rest: {
      scale: 1, // Return to the original size when not hovered
    },
  };

  return (
    <div className="p-2 overflow-hidden">
      <div data-aos="fade-left" className="mt-10 mb-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <motion.img
            initial="rest"
            whileHover="hover"
            variants={hoverAnimation}
            src="https://i.ibb.co/64qMByK/banner.webp"
            className="max-w-xl w-1/2 rounded-lg "
          />
          <div className="w-2/4">
            <h1 className="text-3xl font-light">
              Spice Lounge
              <br />
              <span className="text-[#ef2b47] font-bold">
                Savor the Moment, Taste the Tradition
              </span>
            </h1>
            <p className="py-6 font-light">
              Welcome to Spice Lounge, where culinary creativity meets the art
              of relaxation. Step into a world of flavor and flair, where every
              dish is a symphony of spices carefully orchestrated to delight
              your senses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
