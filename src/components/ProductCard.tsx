import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import cross_walk from '../assets/ProductCard/cross_walk.png';
import dim_logo from '../assets/ProductCard/dim logo.png';
import product_main from '../assets/ProductCard/Product_main.png';
import product_2 from '../assets/ProductCard/Product_2.png';
import product_3 from '../assets/ProductCard/Product_3.png';
import product_4 from '../assets/ProductCard/Product_4.png';

const ProductCard = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        product_main,
        product_2,
        product_3,
        product_4
    ];

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    return (
        <section className="py-10 bg-white">
            {/* "Don't have it yet?" Text */}
            <div className="text-center mb-8">
                <p className="text-2xl font-semibold text-[#181818]">Don't have it yet?</p>
                <p className="text-[#777] mt-2">Mr. Brushee is what you need in this fast-paced world.</p>
            </div>
            <div className="relative w-full py-8 min-h-[500px] lg:min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cross_walk})` }}>
                <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md text-white rounded-2xl p-6 border border-white/10">
                    <div className="flex gap-8">
                        {/* Left side - Product Images */}
                        <div className="w-1/2">
                            <div className="bg-white rounded-xl p-4 mb-4 aspect-square">
                                <img
                                    src={productImages[selectedImage]}
                                    alt="Mr. Brushee"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="relative">
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={prevImage}
                                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex gap-3">
                                            {productImages.map((img, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedImage(index)}
                                                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-red-500' : 'border-transparent'
                                                        }`}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Product view ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button
                                        onClick={nextImage}
                                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Product Info */}
                        <div className="w-1/2">
                            <h3 className="text-2xl font-medium mb-2">Mr. Brushee</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                double sided shoe brush, portable design spray, built-in detergent with refillable tank, ideal for deep cleaning
                            </p>

                            <div className="grid grid-cols-3 gap-3 mb-8">
                                <div className="bg-white/10 p-3 rounded-lg text-center">
                                    <span className="text-sm">14.4 cm</span>
                                </div>
                                <div className="bg-white/10 p-3 rounded-lg text-center">
                                    <span className="text-sm">5.66 in</span>
                                </div>
                                <div className="bg-white/10 p-3 rounded-lg text-center">
                                    <span className="text-sm">4cm/1.57in</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-2xl font-bold">$15.00</span>
                                    <span className="text-sm text-gray-400 line-through">USD 25.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm text-gray-400">Quantity</span>
                                    <div className="flex items-center gap-2">
                                        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            -
                                        </button>
                                        <span>1</span>
                                        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4">
                                    Buy Now
                                </button>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Share2 className="w-4 h-4" />
                                        <span>Share</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-4 h-4" />
                                        <span>Saved with 5.6K+ Pins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="max-w-xl mx-auto mt-20 text-center p-12"
                style={{
                    backgroundImage: `url(${dim_logo})`,
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
    );
};

export default ProductCard;