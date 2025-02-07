import circular_logo from '../assets/photo_2024-03-13_17-40-54 2.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 mx-4 md:mx-8 lg:mx-16 p-4 md:p-6 flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
      <img src={circular_logo}  className="w-10 md:w-12 h-10 md:h-12" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors">
      Buy Now
      </button>
    </nav>
  );
};

export default Navbar;