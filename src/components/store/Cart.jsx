import React, { useState } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import Checkout from './Checkout';

export default function Cart({ items, onUpdateQuantity, onRemoveItem, onClose }) {
  const [showCheckout, setShowCheckout] = useState(false);
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 100 : 0; // Fixed shipping cost
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;
  
  const handleCheckout = (orderDetails) => {
    // Here you would typically send the order to your backend
    console.log('Order placed:', orderDetails);
    onClose();
  };
  
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6 text-center">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Shopping Cart</h3>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">₹{item.price} per unit</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                      disabled={item.quantity >= item.stock}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm border-t pt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (18%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="w-full mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showCheckout && (
        <Checkout
          cartItems={items}
          total={total}
          onClose={() => setShowCheckout(false)}
          onComplete={handleCheckout}
        />
      )}
    </>
  );
}
