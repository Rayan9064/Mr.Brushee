
const CustomerCount = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl text-gray-600 font-light">
          over <span className="font-medium">7000+</span> happy customers
        </p>
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div 
              key={index} 
              className="w-12 h-12 bg-gray-200 rounded-full"
            />
          ))}
          <div className="w-12 h-12 bg-gray-200 rounded-full relative">
            <span className="absolute inset-0 flex items-center justify-center text-gray-600">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCount;