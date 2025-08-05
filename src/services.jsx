import React, { useState } from 'react';

const services = [
  {
    title: 'Skincare Treatments',
    price: 'From $40',
    image: 'https://img.freepik.com/premium-photo/young-beautiful-woman-is-receiving-facials-skincare-treatments-beauty-parlour_1218867-51342.jpg',
    description: 'Deep cleansing facials, hydration therapy, and acne solutions tailored to your skin type.',
  },
  {
    title: 'Haircare & Styling',
    price: 'From $30',
    image: 'https://i.pinimg.com/564x/f2/c6/0d/f2c60d195e93f7caf619da23bfc5915d.jpg',
    description: 'Hair spa, cut, color, and styling services using premium products and techniques.',
  },
  {
    title: 'Makeup Services',
    price: 'From $60',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PjK8IzYdePjrW6raNBsQAll81yShTMfc0Q&s',
    description: 'Bridal, party, and casual makeup by certified beauty artists to enhance your glow.',
  },
  {
    title: 'Nail Art & Care',
    price: 'From $25',
    image: 'https://cdn.shopify.com/s/files/1/0555/7148/0761/files/different-types-of-nail-extensions-1_600x600.png?v=1699409874',
    description: 'Manicure, pedicure, gel polish, and custom nail art with long-lasting finish.',
  },
];

const Services = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
    alert(`${service.title} added to cart`);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Beauty Services</h2>
        <p className="text-gray-600">
          At BeautyHub, we offer a wide range of beauty services to help you look and feel your best.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <span className="text-pink-500 font-medium block mb-4">{service.price}</span>
              <button
                onClick={() => addToCart(service)}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Cart summary (temporary display) */}
      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12 bg-white shadow-md rounded-xl p-6">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            {cart.map((item, idx) => (
              <li key={idx}>{item.title} - {item.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Services;
