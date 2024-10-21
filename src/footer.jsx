import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black my-[50px] text-white py-12 w-[95%] mx-auto rounded-xl mt-[100px]">
            <div className="px-6">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">TopOne</h3>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Tampil Stylish di Setiap Kesempatan dengan TopOne
                        </p>
                    </div>

                    {/* Footer Column 2 - Navlink */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Navlink</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Beranda</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Tentang</a></li>
                        </ul>
                    </div>

                    {/* Footer Column 3 - General */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">General</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Beranda</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Tentang</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-500 border-t border-gray-700 pt-6">
                    <p>© 2024 Banda Neira. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
