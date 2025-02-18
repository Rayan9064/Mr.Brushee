import Image from 'next/image';
import circular_logo from '@/Navbar/circular_logo.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 mx-4 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32 p-4 md:p-6 xl:p-8 flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
        <Image src={circular_logo} alt='Mr.Brushee Logo' className="w-10 md:w-12 lg:w-14 xl:w-18 h-10 md:h-12 lg:h-14 xl:h-18" />
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 lg:px-8 xl:px-10 py-2 xl:py-3 rounded-full text-sm md:text-base xl:text-base font-medium transition-colors">
        Buy Now
      </button>
    </nav>
  );
};

export default Navbar;