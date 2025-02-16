import customerCount from '../assets/CustomerCount/CustomerCount.png';

const CustomerCount = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-black transform -skew-y-3 -skew-x-12 mt-16">
        <div className="h-full flex items-center justify-between px-8 text-gray-600 text-xs tracking-wider overflow-hidden whitespace-nowrap">
          <div className="hidden sm:flex justify-between w-full">
            <span>efficient</span>
            <span>life saver</span>
            <span>convenient</span>
            <span>must have</span>
            <span>loved it</span>
            <span>handy</span>
            <span>best choice</span>
          </div>
          <div className="sm:hidden flex justify-between w-full">
            <span>convenient</span>
            <span>efficient</span>
            <span>convenient</span>
            <span>loved it</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center my-10 sm:my-20">
        <img
          src={customerCount}
          alt="Customer Count"
          className="mx-auto w-[90%] sm:w-full max-w-md h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black transform skew-y-3 skew-x-12 mb-16">
        <div className="h-full flex items-center justify-between px-8 text-gray-600 text-xs tracking-wider overflow-hidden whitespace-nowrap">
          <div className="hidden sm:flex justify-between w-full">
        <span>efficient</span>
        <span>life saver</span>
        <span>convenient</span>
        <span>must have</span>
        <span>loved it</span>
        <span>handy</span>
        <span>best choice</span>
          </div>
          <div className="sm:hidden flex justify-between w-full">
        <span>must have</span>
        <span>loved it</span>
        <span>handy</span>
        <span>best choice</span>
          </div>
        </div>
      </div>

      {/* "Don't have it yet?" Text */}
      {/* <div className="text-center mt-16">
        <p className="text-2xl font-semibold text-gray-700">Don't have it yet?</p>
        <p className="text-gray-500 mt-2">Mr. Brushee is what you need in this fast-paced world.</p>
      </div> */}
    </section>
  );
};

export default CustomerCount;