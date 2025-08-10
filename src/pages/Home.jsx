import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy slider images
const sliderImages = [
  "https://thumbs.dreamstime.com/b/woman-facial-mask-beauty-salon-22945999.jpg",
  "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg",
  "https://img.freepik.com/premium-photo/young-beautiful-woman-is-receiving-facials-skincare-treatments-beauty-parlour_1218867-51342.jpg"
];

// Dummy product data
const products = [
  { id: 1, name: "Cleaning", price: "$15", img: "https://www.shutterstock.com/image-photo/close-portrait-beautiful-woman-clean-260nw-2055447860.jpg" },
  { id: 2, name: "mostrizure", price: "$18", img: "https://hips.hearstapps.com/hmg-prod/images/ghk-040424-index-labtesting-facecreams-web-242-662a85834118f.png?crop=1xw:0.8440206929740135xh;center,top&resize=1200:*" },
  { id: 3, name: "Hair strighting", price: "$12", img: "https://static.vecteezy.com/system/resources/previews/014/229/145/non_2x/hair-straighteners-view-photo.jpg" },
  { id: 4, name: "Bridal makeup", price: "$20", img: "https://sumansalon.in/wp-content/uploads/2024/03/626200c4-9adc-41ce-b064-fda94af3bafd.jpg" }
];

function HomePage() {
  const [user, setUser] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, [navigate]);

  // Auto change slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Plant Store</h1>
        <nav className="space-x-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Welcome */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold text-purple-700">
      
        </h2>
        <p className="text-lg mt-2">Explore our beauty collection</p>
      </div>

      {/* Slider */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={sliderImages[currentSlide]}
          alt="Slider"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Products */}
      <section className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-purple-700">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{product.name}</h4>
                <p className="text-purple-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} Plant Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
