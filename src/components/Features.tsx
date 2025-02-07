// import flawless from '../assets/flawless.png';
// import compact from '../assets/compact.png';
// import product from '../assets/Component 12.png';

const Features = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">
        <div className="text-center">
        <img 
          src='../assets/flawless.png' 
          alt="Flawless"
          className="w-48 h-auto" // Added size constraint
        />
        </div>
        <div className="flex justify-center">
        <img 
          src='../assets/Component 12.png'
          alt="Product Image"
        />
        </div>
        <div className="text-center">
        <img 
          src='../assets/compact.png'
          alt="Compact"
          className="w-48 h-auto" // Added size constraint
        />
        </div>
      </div>
      <p className="text-gray-500 font-light text-center mb-8">minimal effort. Maximum clean</p>
      </div>
    </section>
  );
};

export default Features;