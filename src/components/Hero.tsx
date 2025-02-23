import Image from 'next/image';
import heroBackgroundImage from '@/Hero/Component 9.png';
// import product from '@/Hero/product.png';
import product_mobile from '@/Hero/product Mobile.png';

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
        <source media="(min-width: 1024px)" srcSet={heroBackgroundImage.src} />
        <source media="(min-width: 768px)" srcSet={heroBackgroundImage.src} />
        <Image
          src={heroBackgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="container mx-auto px-6 lg:px-16 h-full flex flex-col md:flex-row items-center justify-center md:justify-between font-nunito">
        <div className="flex flex-col items-center md:items-start md:w-3/5">
          <div className="md:hidden relative w-full flex justify-center mb-2">
        <Image
          src={product_mobile}
          alt="Product"
          className="object-contain w-[70%] max-w-sm"
          priority
        />
          </div>
          <div className="max-w-3xl p-4 md:p-6 xl:p-8">
        <h1 className="text-2xl sm:text-3xl max-sm:mb-0 md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
          Polish the path to{' '}
          <br />
          your next <span className="italic font-normal" style={{ color: '#333333' }}>Opportunity</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-white/80">
          clean shoes <span style={{ background: 'linear-gradient(to right, #424242, #787878)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Anywhere.</span>
        </p>
          </div>
        </div>
        <div className="hidden relative md:w-2/5 md:flex md:justify-end">
          <Image
        src={product_mobile}
        alt="Product"
        className="object-contain w-[90%] h-full"
        priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;