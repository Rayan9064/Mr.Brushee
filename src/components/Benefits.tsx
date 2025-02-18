import Image from 'next/image';
import losen from '@/Benefits/loosen.png';
import brush from '@/Benefits/brush.png';
import rub from '@/Benefits/rub.png';

const Benefits = () => {
  const steps = [
    {
      title: 'Loosen',
      description: 'Helps loosen dirt, stains, and grime making it easier to wipe or scrub away',
      image: losen
    },
    {
      title: 'Brush',
      description: 'Effectively removes dirt and debris from shoes, reaching deep into textured surfaces',
      image: brush
    },
    {
      title: 'Rub',
      description: 'Removes dirt without scratching, perfect for maintaining the finish of sneakers and shoes',
      image: rub
    }
  ];

  return (
    <section className="py-20 bg-white text-black font-nunito">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-[#A5A5A5] rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-center p-4"
                />
              </div>
              <div className="max-w-[200px] mx-auto">
                <h4 className="text-xl font-light mb-4 text-[#555]">{step.title}</h4>
                <p className="text-sm text-[#999] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;