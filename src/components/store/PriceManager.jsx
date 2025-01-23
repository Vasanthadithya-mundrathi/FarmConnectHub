import React, { useState } from 'react';
import { FaChartLine, FaPercent, FaTimes } from 'react-icons/fa';

export default function PriceManager({ product, onUpdate, onClose }) {
  const [priceData, setPriceData] = useState({
    basePrice: product.price,
    discount: product.discount || 0,
    bulkDiscounts: product.bulkDiscounts || [
      { quantity: 5, discount: 5 },
      { quantity: 10, discount: 10 },
      { quantity: 20, discount: 15 },
    ],
  });

  const [showBulkDiscount, setShowBulkDiscount] = useState(false);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleBulkDiscountChange = (index, field, value) => {
    setPriceData(prev => ({
      ...prev,
      bulkDiscounts: prev.bulkDiscounts.map((discount, i) => 
        i === index ? { ...discount, [field]: parseFloat(value) || 0 } : discount
      )
    }));
  };

  const addBulkDiscount = () => {
    setPriceData(prev => ({
      ...prev,
      bulkDiscounts: [
        ...prev.bulkDiscounts,
        { quantity: 0, discount: 0 }
      ]
    }));
  };

  const removeBulkDiscount = (index) => {
    setPriceData(prev => ({
      ...prev,
      bulkDiscounts: prev.bulkDiscounts.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPrice = priceData.basePrice * (1 - priceData.discount / 100);
    onUpdate({
      ...product,
      price: finalPrice,
      originalPrice: priceData.basePrice,
      discount: priceData.discount,
      bulkDiscounts: priceData.bulkDiscounts,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Price Management</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base Price (₹)
              </label>
              <input
                type="number"
                name="basePrice"
                value={priceData.basePrice}
                onChange={handlePriceChange}
                min="0"
                step="0.01"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount (%)
              </label>
              <input
                type="number"
                name="discount"
                value={priceData.discount}
                onChange={handlePriceChange}
                min="0"
                max="100"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() => setShowBulkDiscount(!showBulkDiscount)}
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  <FaChartLine className="mr-2" />
                  {showBulkDiscount ? 'Hide Bulk Discounts' : 'Show Bulk Discounts'}
                </button>
              </div>

              {showBulkDiscount && (
                <div className="space-y-4">
                  {priceData.bulkDiscounts.map((discount, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={discount.quantity}
                          onChange={(e) => handleBulkDiscountChange(index, 'quantity', e.target.value)}
                          min="1"
                          placeholder="Quantity"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="relative">
                          <input
                            type="number"
                            value={discount.discount}
                            onChange={(e) => handleBulkDiscountChange(index, 'discount', e.target.value)}
                            min="0"
                            max="100"
                            placeholder="Discount %"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                          <FaPercent className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeBulkDiscount(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addBulkDiscount}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    + Add Bulk Discount
                  </button>
                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Base Price:</span>
                <span>₹{priceData.basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Discount:</span>
                <span>{priceData.discount}%</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Final Price:</span>
                <span>₹{(priceData.basePrice * (1 - priceData.discount / 100)).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Update Price
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
