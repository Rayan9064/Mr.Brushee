import flawless from '../assets/Features/Flawless.png';
import compact from '../assets/Features/Compact.png';
import product from '../assets/Features/product.png';

const Features = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">
            <div className="text-center my-8 md:my-0">
            <img
              src={flawless}
              alt="Flawless"
              className="w-32 sm:w-48 md:w-32 h-auto" // Responsive sizing for different breakpoints
            />
            </div>
          <div className="flex justify-center">
            <img
              src={product}
              alt="Product Image"
              className="w-48 sm:w-64 md:w-80 h-auto"
            />
          </div>
          <div className="text-center my-8 md:my-0">
            <img
              src={compact}
              alt="Compact"
              className="w-32 sm:w-48 md:w-32 h-auto" // Responsive sizing for different breakpoints
            />
          </div>
        </div>
        <p className="text-gray-500 font-light text-center mb-8">minimal effort. Maximum clean</p>
      </div>
    </section>
  );
};

export default Features;