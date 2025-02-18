import Image from 'next/image'
import hands from '@/Footer/hands.png';
import product from '@/Footer/product.png';
import grab_it from '@/Footer/grab_it.png';

const Footer = () => {
  const footerLinks = ['About Us', 'Return Policy', 'Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className=" w-full pt-5 bg-white h-auto flex flex-col justify-between">
      <div className="text-center flex-1 flex flex-col justify-end">
        {/* 1. Grab it before others */}
        <Image
          src={grab_it}
          alt="Grab It Before Others"
          className="mx-auto w-[80%] md:w-[45%] lg:w-[45%] h-auto"
        />

        {/* 2. Product Image */}
        <Image
          src={product}
          alt="Shoe Cleaning"
          className="mx-auto my-4 lg:my-6 w-52 lg:w-72"
        />

        {/* 3. Button */}
        <button className="bg-white mb-4 lg:mb-6 text-base max-sm:text-[12px] md:text-sm text-red-500 border border-red-400 hover:bg-red-500 hover:text-white px-8 py-2 rounded-full w-max mx-auto transition-colors font-semibold">
          I Need It!
        </button>

        {/* 4. Hands Image with Footer Links Overlay */}
        <div className="relative w-full">
          <Image
            src={hands}
            alt="Reaching Hands"
            className="w-[80%] max-sm:w-[100%] max-sm:mb-4 md:w-[55%] lg:w-[50%] h-auto object-contain mx-auto"
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