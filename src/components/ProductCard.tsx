"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import cross_walk from '@/ProductCard/cross_walk.png';
import product_main from '@/ProductCard/Product_main.png';
import product_2 from '@/ProductCard/Product_2.png';
import product_3 from '@/ProductCard/Product_3.png';
import product_4 from '@/ProductCard/Product_4.png';
import Guarantee from './Guarantee';

const ProductCard = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        product_main,
        product_2,
        product_3,
        product_4
    ];
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleBuyNow = async () => {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        }
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    return (
        <section className="py-10 bg-white">
            {/* "Don't have it yet?" Text */}
            <div className="text-center mb-4">
                <p className="text-2xl font-semibold text-[#181818]">Don&apos;t have it yet?</p>
                <p className="text-[#777] mt-2">Mr. Brushee is what you need in this fast-paced world.</p>
            </div>
            <div className="relative w-full py-8 min-h-[500px] lg:min-h-screen bg-cover bg-center px-4 lg:px-8" style={{ backgroundImage: `url(${cross_walk.src})` }}>
                <div className="relative max-w-md md:max-w-3xl mx-auto bg-black/30 backdrop-blur-md text-white rounded-2xl p-4 md:p-6 border border-white/10 my-8 lg:my-16">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        {/* Left side - Product Images */}
                        <div className="w-full md:w-1/2">
                            <div className="bg-white rounded-xl p-3 md:p-4 mb-4 aspect-square">
                                <Image
                                    src={productImages[selectedImage]}
                                    alt="Mr. Brushee"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="relative">
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={prevImage}
                                        className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <ChevronLeft className="w-4 md:w-5 h-4 md:h-5" />
                                    </button>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex gap-2 md:gap-3 overflow-x-auto">
                                            {productImages.map((img, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedImage(index)}
                                                    className={`w-16 md:w-20 h-16 md:h-20 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${selectedImage === index ? 'border-red-500' : 'border-transparent'
                                                        }`}
                                                >
                                                    <Image
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
                                        className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Product Info */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-medium mb-2">Mr. Brushee</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                                double sided shoe brush, portable design spray, built-in detergent with refillable tank, ideal for deep cleaning
                            </p>

                            <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                                <div className="bg-white/10 p-2 md:p-3 rounded-lg text-center">
                                    <span className="text-xs md:text-sm">14.4 cm</span>
                                </div>
                                <div className="bg-white/10 p-2 md:p-3 rounded-lg text-center">
                                    <span className="text-xs md:text-sm">5.66 in</span>
                                </div>
                                <div className="bg-white/10 p-2 md:p-3 rounded-lg text-center">
                                    <span className="text-xs md:text-sm">4cm/1.57in</span>
                                </div>
                            </div>

                            <div className="mb-6 md:mb-8">
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-xl md:text-2xl font-bold">$15.00</span>
                                    <span className="text-xs md:text-sm text-gray-400 line-through">USD 25.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-4 md:mb-6">
                                    <span className="text-xs md:text-sm text-gray-400">Quantity</span>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={decrementQuantity}
                                            className="w-6 md:w-8 h-6 md:h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span>{quantity}</span>
                                        <button 
                                            onClick={incrementQuantity}
                                            className="w-6 md:w-8 h-6 md:h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button onClick={handleBuyNow} className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4">
                                    Buy Now
                                </button>
                                <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Share2 className="w-3 md:w-4 h-3 md:h-4" />
                                        <span>Share</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-3 md:w-4 h-3 md:h-4" />
                                        <span>Saved with 5.6K+ Pins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Guarantee />
        </section>
    );
};

export default ProductCard;