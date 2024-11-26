import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
    const navigate = useNavigate();

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <div className="relative flex flex-col items-center px-[10%]">
            <h1 className='text-[30px] font-bold mb-[50px]'>Produk Kami</h1>
            <div className="flex flex-wrap justify-center gap-4">
                
                {/* Card 1 */}
                <div 
                    onClick={() => handleCardClick('/detail')} // Route tujuan
                    className="w-full sm:w-80 md:max-w-[400px] snap-center bg-white rounded-lg shadow-lg carousel-card transition-transform transform hover:scale-105 cursor-pointer mb-3 mx-3"
                >
                    <img
                        className="w-full h-64 object-cover rounded-t-lg" 
                        src="https://down-id.img.susercontent.com/file/sg-11134201-7repf-m2kegxhm5xkrdc.webp"
                        alt="Shoes"
                    />
                    <div className="px-4 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            Shoes!
                            <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">NEW</span>
                        </div>
                        <p className="text-gray-700 text-base">If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <div className="px-4 py-2 flex justify-end">
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2 py-1 rounded-full">Fashion</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">Products</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div 
                    onClick={() => handleCardClick('/detail')}
                    className="w-full sm:w-80 md:max-w-[400px] snap-center bg-white rounded-lg shadow-lg carousel-card transition-transform transform hover:scale-105 cursor-pointer mb-3 mx-3"
                >
                    <img
                        className="w-full h-64 object-cover rounded-t-lg" 
                        src="https://down-id.img.susercontent.com/file/sg-11134201-7reot-m2kegwqp9bk0ab.webp"
                        alt="Hats"
                    />
                    <div className="px-4 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            Hats!
                            <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">NEW</span>
                        </div>
                        <p className="text-gray-700 text-base">The best hats for every occasion.</p>
                    </div>
                    <div className="px-4 py-2 flex justify-end">
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2 py-1 rounded-full">Fashion</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">Products</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div 
                    onClick={() => handleCardClick('/detail')}
                    className="w-full sm:w-80 md:max-w-[400px] snap-center bg-white rounded-lg shadow-lg carousel-card transition-transform transform hover:scale-105 cursor-pointer mb-3 mx-3"
                >
                    <img
                        className="w-full h-64 object-cover rounded-t-lg" 
                        src="https://down-id.img.susercontent.com/file/sg-11134201-7req5-m2kegx2mruja23.webp        "
                        alt="Watches"
                    />
                    <div className="px-4 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            Watches!
                            <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">NEW</span>
                        </div>
                        <p className="text-gray-700 text-base">Timeless watches for every style.</p>
                    </div>
                    <div className="px-4 py-2 flex justify-end">
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2 py-1 rounded-full">Fashion</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">Products</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
