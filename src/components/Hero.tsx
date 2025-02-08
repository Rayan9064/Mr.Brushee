import heroBackgroundImage from '../assets/Hero/Component 9.png'; // Or .png, .svg, etc.
// Ensure the path is correct relative to your component file

const Hero = () => {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
      backgroundImage: `url(${heroBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-16 h-full flex items-center font-nunito">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
        Polish the path to<br />
        your next <span className="italic font-normal" style={{ color: '#333333' }}>Opportunity</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light">
        clean shoes <span style={{ background: 'linear-gradient(to right, #424242, #787878)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Anywhere.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;