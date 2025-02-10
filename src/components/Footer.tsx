import hands from '../assets/Footer/hands.png';
import product from '../assets/Footer/product.png';
import grab_it from '../assets/Footer/grab_it.png';

const Footer = () => {
  const footerLinks = ['About Us', 'Return Policy', 'Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className="mt-6 w-full h-screen flex flex-col justify-between">
      <div className="text-center flex-1 flex flex-col justify-end">
        {/* 1. Grab it before others */}
        <img
          src={grab_it}
          alt="Grab It Before Others"
          className="mx-auto w-[45%] h-auto"
        />

        {/* 2. Product Image */}
        <img
          src={product}
          alt="Shoe Cleaning"
          className="mx-auto my-6 w-72"
        />

        {/* 3. Button */}
        <button className="bg-white mb-6 text-red-500 border border-red-400 hover:bg-red-500 hover:text-white px-8 py-2 rounded-full w-max mx-auto transition-colors font-semibold">
          I Need It!
        </button>

        {/* 4. Hands Image with Footer Links Overlay */}
        <div className="relative w-full">
          <img
            src={hands}
            alt="Reaching Hands"
            className="w-[50%] h-auto object-contain mx-auto"
          />
          {/* Glass effect footer links */}
          <div className="absolute bottom-0 left-0 right-0 w-full backdrop-blur-md bg-[#6C6C6C]/30 py-6">
            <div className="w-full px-4">
              <div className=" max-w-[50%] flex justify-evenly items-center text-[#F2F2F2] mx-auto">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm hover:text-gray-800 transition-colors"
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