import dim_logo from '@/ProductCard/dim_logo.png';

export default function Guarantee() {
  return (
    <section>
        <div
                className="max-w-xl mx-auto mt-20 text-center p-12"
                style={{
                    backgroundImage: `url(${dim_logo.src})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <h3 className="text-2xl text-[#333] mb-6">30 Days Guarantee</h3>
                <p className="text-[#777] text-base">
                    We stand by our products with a 30-day, 100% free guarantee. If you're not
                    completely satisfied with your order, simply ship it back to us for a full refund.
                    We guarantee it works!
                </p>
            </div>
            <hr className="mt-10 border-[#D9D9D9]" />
    </section>
  )
}
