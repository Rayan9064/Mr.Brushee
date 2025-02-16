import heroBackgroundImage from '../assets/Hero/Component 9.png'; // Or .png, .svg, etc.
// Ensure the path is correct relative to your component file

const Hero = () => {
  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}
    >
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 1024px)" srcSet={heroBackgroundImage} />
        <source media="(min-width: 768px)" srcSet={heroBackgroundImage} />
        <img 
          src={heroBackgroundImage} 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="container mx-auto px-6 lg:px-16 h-full flex items-center font-nunito">
        <div className="max-w-2xl p-4 md:p-6 xl:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Polish the path to <br className="hidden sm:block" />
            your next <span className="italic font-normal" style={{ color: '#333333' }}>Opportunity</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light text-white/80">
            clean shoes <span style={{ background: 'linear-gradient(to right, #424242, #787878)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Anywhere.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;