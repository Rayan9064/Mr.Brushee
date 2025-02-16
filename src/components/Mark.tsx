import walk from '../assets/Mark/walk.png';

const Mark = () => {
  return (
    <section className="relative bg-white border-gray-200 overflow-hidden">
      <div className="relative w-full mx-auto text-center p-0">
        <img
          src={walk}
          alt="Walking feet"
          className="w-full h-auto object-cover"
        />

        <p
          className="absolute bottom-0 xs:bottom-4 md:bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-gray-600 font-['Nunito'] font-medium
          text-sm xs:text-base sm:text-lg md:text-2xl lg:text-[28px]"
          style={{ fontFamily: 'Lora' }}
        >
          leave a{' '}
          <span
            className="italic text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-[45px]"
            style={{ fontFamily: 'Lora' }}
          >
            Mark
          </span>
          , not a stain
        </p>
      </div>
    </section>
  );
};

export default Mark;