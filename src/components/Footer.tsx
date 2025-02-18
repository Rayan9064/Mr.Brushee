import Image from 'next/image'
import hands from '@/Footer/hands.png';
import product from '@/Footer/product.png';
import grab_it from '@/Footer/grab_it.png';

const Footer = () => {
  const footerLinks = ['About Us', 'Return Policy', 'Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className="w-full h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-between pt-5">
        {/* 1. Grab it before others */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={grab_it}
            alt="Grab It Before Others"
            className="w-[80%] md:w-[45%] lg:w-[45%] h-auto"
          />
        </div>

        {/* 2. Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={product}
            alt="Shoe Cleaning"
            className="w-52 max-sm:w-64 lg:w-72"
          />
        </div>

        {/* 3. Button */}
        <div className="flex-1 flex items-center justify-center">
          <button className="bg-white text-base max-sm:text-[12px] md:text-sm text-red-500 border border-red-400 hover:bg-red-500 hover:text-white px-8 py-2 rounded-full transition-colors font-semibold">
            I Need It!
          </button>
        </div>

        {/* 4. Hands Image with Footer Links Overlay */}
        <div className="flex-1 relative w-full">
          <Image
            src={hands}
            alt="Reaching Hands"
            className="w-[80%] max-sm:w-[100%] max-sm:min-h-[200px] md:w-[55%] lg:w-[50%] h-auto object-contain mx-auto"
          />
          {/* Glass effect footer links */}
          <div className="absolute bottom-0 left-0 right-0 w-full backdrop-blur-md bg-[#6C6C6C]/30 py-4 lg:py-6">
            <div className="w-full px-4">
              <div className="w-full md:max-w-[80%] lg:max-w-[50%] flex justify-between md:justify-center items-center text-[#F2F2F2] mx-auto px-4 lg:px-0">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[10px] md:text-xs lg:text-sm hover:text-gray-800 transition-colors md:mx-3 lg:mx-4"
            >
              {link}
            </a>
          ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;