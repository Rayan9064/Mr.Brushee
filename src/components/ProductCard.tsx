import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-12">Don't have it yet?</h2>
        <div className="max-w-md mx-auto bg-gray-900 text-white rounded-lg p-6">
          <div className="flex gap-6 mb-6">
            <div className="w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1594550319106-78cd0d8a25c0?auto=format&fit=crop&w=200&h=200" 
                alt="Product" 
                className="w-full object-cover rounded"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-gray-800 p-2 rounded text-center text-xs">14.6 cm</div>
                <div className="bg-gray-800 p-2 rounded text-center text-xs">5.96 in</div>
                <div className="bg-gray-800 p-2 rounded text-center text-xs">4cm/1.5in</div>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-lg mb-1">Mr. Brushee</h3>
              <p className="text-sm text-gray-400 mb-4">Portable shoe brush</p>
              <div className="mb-6">
                <span className="text-2xl font-bold">$15.00</span>
                <span className="text-sm text-gray-400 ml-2 line-through">$25.00</span>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto mt-16 text-center">
          <h3 className="text-xl mb-4">30 Days Guarantee</h3>
          <p className="text-gray-600 text-sm">
            We stand by our products with a 30-day, 100% free guarantee. If you're not
            completely satisfied with your order, simply ship it back to us for a full refund.
            We guarantee it works!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;