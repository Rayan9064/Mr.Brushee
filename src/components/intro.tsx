// import bg from '../assets/Rectangle 42.png'; // Background image
// import pocket from '../assets/Mask group.png';
// import shoeCleaning from '../assets/Group 38.png';
// import spray from '../assets/Frame 31.png';

const Intro = () => {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundColor: '#1C1C1C', // Set background color here
        backgroundImage: `url(../assets/Rectangle 42.png)`,
        backgroundSize: 'cover', // Or 'contain', 'auto' as needed
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
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center gap-20">
          <div className="relative w-96 h-72">
            {/* Top circle (mirrored position) */}
            <div className="absolute -top-8 right-12 w-24 h-24 rounded-full overflow-hidden">
              <img src='../assets/Mask group.png' alt="Pocket" className="object-cover w-full h-full" />
            </div>

            {/* Middle circle */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48 rounded-full overflow-hidden">
              <img src='../assets/Group 38.png' alt="Shoe Cleaning" className="object-cover w-full h-full" />
            </div>

            {/* Bottom circle (more distant) */}
            <div className="absolute -bottom-12 right-20 w-20 h-20 rounded-full overflow-hidden">
              <img src='../assets/Frame 31.png' alt="Spray" className="object-cover w-full h-full" />
            </div>
          </div>

            <div className="max-w-2xl p-8 rounded-3xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <h2 className="text-4xl mb-6" style={{ color: '#505050' }}>
              Your shoes deserves the <span className="italic" style={{ color: '#999999' }}>Easiest</span> clean
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#999999' }}>
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