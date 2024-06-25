import React from "react";

const Offer = () => {
  return (
    <div className="mt-20 px-4 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Special Offers</h2>
        <p className="text-gray-600 mt-2">
          Don't miss out on our exclusive deals!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            50% Off on Your First Order
          </h3>
          <p className="text-gray-700 mb-4">
            Use code FIRST50 at checkout to get 50% off on your first order.
            Hurry, offer valid for a limited time only!
          </p>
          <button className="bg-lightOrange text-white py-2 px-4 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Order Now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            Free Delivery on Orders Over ₹ 200
          </h3>
          <p className="text-gray-700 mb-4">
            Enjoy free delivery on all orders over ₹ 200. No code needed, just
            add items to your cart and the discount will be applied
            automatically.
          </p>
          <button className="bg-lightOrange text-white py-2 px-4 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
