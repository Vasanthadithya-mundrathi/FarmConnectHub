import React from 'react';
import { FaEdit, FaTrash, FaCartPlus, FaRupeeSign, FaChartLine } from 'react-icons/fa';

export default function ProductCard({ product, role, onAddToCart, onEdit, onDelete, onEditPrice }) {
  const { name, description, price, image, category, stock, discount, bulkDiscounts } = product;

  const renderPrice = () => {
    if (!discount) {
      return <span className="text-xl font-bold">₹{price.toFixed(2)}</span>;
    }

    const originalPrice = price / (1 - discount / 100);
    return (
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-600">₹{price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through">₹{originalPrice.toFixed(2)}</span>
        </div>
        <span className="text-sm text-green-600 font-medium">{discount}% off</span>
      </div>
    );
  };

  const renderBulkDiscounts = () => {
    if (!bulkDiscounts?.length) return null;

    return (
      <div className="mt-2 text-sm text-gray-600">
        <p className="font-medium">Bulk Discounts:</p>
        <ul className="list-disc list-inside">
          {bulkDiscounts.map((discount, index) => (
            <li key={index}>
              Buy {discount.quantity}+ get {discount.discount}% off
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={image || 'https://via.placeholder.com/300x200?text=Product+Image'}
        alt={name}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
        }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="px-2 py-1 bg-gray-100 text-sm rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-end mb-4">
          <div>
            {renderPrice()}
            {renderBulkDiscounts()}
          </div>
          <div className="text-sm text-gray-600">
            Stock: {stock}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          {role === 'buyer' ? (
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              disabled={stock === 0}
            >
              <FaCartPlus className="mr-2" />
              {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          ) : (
            <>
              <button
                onClick={() => onEditPrice(product)}
                className="flex items-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Manage Price"
              >
                <FaChartLine />
              </button>
              <button
                onClick={() => onEdit(product)}
                className="flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                title="Edit Product"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="flex items-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete Product"
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>

        {stock <= 5 && stock > 0 && (
          <div className="mt-2 text-sm text-orange-600">
            Only {stock} items left!
          </div>
        )}
        {stock === 0 && (
          <div className="mt-2 text-sm text-red-600">
            Out of stock
          </div>
        )}
      </div>
    </div>
  );
}
