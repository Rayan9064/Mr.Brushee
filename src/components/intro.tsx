import Image from 'next/image';
import bg from '@/Intro/tile_bg.png';
import pocket from '@/Intro/pocket.png';
import shoeCleaning from '@/Intro/shoe_cleaning.png';
import spray from '@/Intro/spray.png';

const Intro = () => {
  return (
    <section
      className="relative min-h-screen text-white flex items-center justify-center"
      style={{
        backgroundColor: '#1C1C1C',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="25" cy="25" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {/* Circular Images */}
          <div className="relative w-full md:w-[500px] h-auto md:h-[400px]">
            <div className="flex md:hidden justify-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image src={pocket} alt="Pocket" className="object-cover w-full h-full" />
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image src={shoeCleaning} alt="Shoe Cleaning" className="object-cover w-full h-full" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image src={spray} alt="Spray" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              {/* Top circle */}
              <div className="absolute -top-14 right-12 w-32 h-32 rounded-full overflow-hidden">
                <Image src={pocket} alt="Pocket" className="object-cover w-full h-full" />
              </div>

              {/* Middle circle */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 rounded-full overflow-hidden">
                <Image src={shoeCleaning} alt="Shoe Cleaning" className="object-cover w-full h-full" />
              </div>

              {/* Bottom circle */}
              <div className="absolute -bottom-8 right-8 w-28 h-28 rounded-full overflow-hidden">
                <Image src={spray} alt="Spray" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

            <div className="max-w-2xl p-6 md:p-10 rounded-3xl text-center md:text-left" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8" style={{ color: '#505050' }}>
              Your shoes deserves the <span className="italic" style={{ color: '#999999' }}>Easiest</span> clean
            </h2>
            <p className="text-lg md:text-base lg:text-xl leading-relaxed" style={{ color: '#999999' }}>
              Our <span className="font-medium">Portable design</span> and{' '}
              <span className="font-medium">Built-in detergent</span> make it easy to clean your shoes
              anytime, anywhere.
              <br />
              no hassle, no mess.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
