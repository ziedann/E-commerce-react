import React, { useState } from 'react';

const ProductDetail = () => {
  // State untuk gambar utama dan jumlah pesanan
  const [mainImage, setMainImage] = useState('https://down-id.img.susercontent.com/file/sg-11134201-7repf-m2kegxhm5xkrdc.webp');
  const [orderCount, setOrderCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  // Fungsi untuk mengubah gambar utama
  const changeMainImage = (image) => {
    setMainImage(image);
  };

  // Fungsi untuk menambah atau mengurangi jumlah pesanan
  const incrementOrder = () => {
    setOrderCount(orderCount + 1);
  };

  const decrementOrder = () => {
    if (orderCount > 1) setOrderCount(orderCount - 1);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-[100px] bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Bagian Gambar Produk */}
        <div className="md:w-1/2">
          {/* Gambar Utama */}
          <img
            className="rounded-lg w-full h-96 object-fit"
            src={mainImage}
            alt="Product"
          />
          
          {/* Gambar Kecil untuk Carousel */}
          <div className="flex mt-4 space-x-2">
            <img
              className="w-20 h-20 object-fit cursor-pointer border border-gray-300 rounded"
              src="https://down-id.img.susercontent.com/file/sg-11134201-7repf-m2kegxhm5xkrdc.webp"
              alt="Thumbnail 1"
              onClick={() => changeMainImage('https://down-id.img.susercontent.com/file/sg-11134201-7repf-m2kegxhm5xkrdc.webp')}
            />
            <img
              className="w-20 h-20 object-fit cursor-pointer border border-gray-300 rounded"
              src="https://down-id.img.susercontent.com/file/sg-11134201-7reot-m2kegwqp9bk0ab.webp"
              alt="Thumbnail 2"
              onClick={() => changeMainImage('https://down-id.img.susercontent.com/file/sg-11134201-7reot-m2kegwqp9bk0ab.webp')}
            />
            <img
              className="w-20 h-20 object-cover cursor-pointer border border-gray-300 rounded"
              src="https://down-id.img.susercontent.com/file/sg-11134201-7req5-m2kegx2mruja23.webp"
              alt="Thumbnail 3"
              onClick={() => changeMainImage('https://down-id.img.susercontent.com/file/sg-11134201-7req5-m2kegx2mruja23.webp')}
            />
          </div>
        </div>

        {/* Bagian Detail Produk */}
        <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">Kanka Shoes</h1>

          {/* Harga */}
          <div className="text-xl text-red-600 font-bold mb-3">Rp 150.000</div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <span className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            <span className="ml-2 text-gray-600">(4.5/5 dari 120 ulasan)</span>
          </div>

          {/* Deskripsi Produk */}
          <p className="text-gray-700 mb-4">
           <span className='font-bold'>KANKA Shoes</span> dengan desain yang menarik dan elegan dengan bahan yang ringan jika digunakan.
          </p>

          {/* Variasi Ukuran */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Ukuran/Varian:</label>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="block w-full p-2 border rounded-md"
            >
              <option value="" disabled>Pilih ukuran</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Jumlah Pesanan */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Jumlah Pesanan:</label>
            <div className="flex items-center">
              <button
                onClick={decrementOrder}
                className="px-5 py-2 bg-black rounded-md text-white font-bold cursor-pointer focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={orderCount}
                readOnly
                className="w-12 text-center bg-white focus:outline-none"
                style={{ border: 'none' }}
              />
              <button
                onClick={incrementOrder}
                className="px-5 py-2 bg-black rounded-md text-white font-bold cursor-pointer focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Button Order */}
          <button className="w-full bg-black text-white py-3 rounded-md cursor-pointer transition duration-300">
            Order Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
