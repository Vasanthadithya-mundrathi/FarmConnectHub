import React, { useState, useEffect } from 'react';
import RoleSwitcher from '../components/store/RoleSwitcher';
import Cart from '../components/store/Cart';
import ProductForm from '../components/store/ProductForm';
import { FaPlus, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';

// Sample data
const initialProducts = [
  {
    id: 1,
    name: 'Organic Tomato Seeds',
    description: 'High-yield, disease-resistant tomato seeds perfect for home gardens',
    price: 149.99,
    category: 'Seeds',
    stock: 50,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Garden Tool Set',
    description: 'Complete set of essential gardening tools including trowel, pruner, and rake',
    price: 1299.99,
    category: 'Tools',
    stock: 20,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Organic Fertilizer',
    description: 'Natural, chemical-free fertilizer for healthy plant growth',
    price: 499.99,
    category: 'Fertilizers',
    stock: 100,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Drip Irrigation Kit',
    description: 'Water-efficient irrigation system for small to medium farms',
    price: 2499.99,
    category: 'Irrigation',
    stock: 15,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Protective Gloves Set',
    description: 'Durable gardening gloves with extra grip and thorn protection',
    price: 299.99,
    category: 'Protection',
    stock: 30,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1578520231245-6a5ae5c34c4e?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Mini Tractor',
    description: 'Compact tractor suitable for small farms and large gardens',
    price: 149999.99,
    category: 'Equipment',
    stock: 5,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1605338803155-8b46277eea26?auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Hybrid Chili Seeds',
    description: 'High-yielding chili pepper seeds with excellent heat tolerance',
    price: 199.99,
    category: 'Seeds',
    stock: 40,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Pesticide Sprayer',
    description: '16L battery-operated sprayer for efficient pest control',
    price: 3499.99,
    category: 'Equipment',
    stock: 25,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1592543196050-6e0c87d00589?auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    name: 'Vermicompost',
    description: 'Premium quality organic vermicompost for better yield',
    price: 799.99,
    category: 'Fertilizers',
    stock: 75,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    name: 'Rain Water Harvesting System',
    description: 'Complete setup for collecting and storing rainwater',
    price: 7999.99,
    category: 'Irrigation',
    stock: 10,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80'
  },
  {
    id: 11,
    name: 'Safety Boots',
    description: 'Waterproof and puncture-resistant farming boots',
    price: 1499.99,
    category: 'Protection',
    stock: 20,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80'
  },
  {
    id: 12,
    name: 'Pruning Shears',
    description: 'Professional-grade bypass pruners for precise cuts',
    price: 899.99,
    category: 'Tools',
    stock: 35,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1593025031678-9fabaa3a1c15?auto=format&fit=crop&q=80'
  },
  {
    id: 13,
    name: 'Organic Cucumber Seeds',
    description: 'Disease-resistant cucumber variety for greenhouse cultivation',
    price: 129.99,
    category: 'Seeds',
    stock: 60,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1591105321467-9de25db24f72?auto=format&fit=crop&q=80'
  },
  {
    id: 14,
    name: 'Soil Testing Kit',
    description: 'Professional kit for testing soil pH and nutrients',
    price: 2999.99,
    category: 'Tools',
    stock: 15,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80'
  },
  {
    id: 15,
    name: 'Bio-Fungicide',
    description: 'Organic fungicide for protecting crops from diseases',
    price: 599.99,
    category: 'Protection',
    stock: 45,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&q=80'
  }
];

export default function Store() {
  const [role, setRole] = useState(() => localStorage.getItem('storeRole') || 'buyer');
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = ['All', 'Seeds', 'Tools', 'Fertilizers', 'Equipment', 'Protection', 'Irrigation'];

  useEffect(() => {
    localStorage.setItem('storeRole', role);
  }, [role]);

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    // Implement checkout later
    alert('Proceeding to checkout...');
    setShowCart(false);
  };

  const handleAddProduct = (productData) => {
    const newProduct = {
      id: Date.now(), // Generate a unique ID
      ...productData
    };
    setProducts(prev => [...prev, newProduct]);
    setShowProductForm(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === editingProduct.id
          ? { ...updatedProduct, id: product.id }
          : product
      )
    );
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(product => product.id !== productId));
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Role Switcher */}
      <RoleSwitcher 
        currentRole={role} 
        onRoleChange={setRole}
      />

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {role === 'buyer' ? 'Farm Store' : 'Manage Products'}
        </h1>
        
        {role === 'buyer' && (
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <FaShoppingCart className="mr-2" />
            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        )}
        
        {role === 'seller' && (
          <button
            onClick={() => setShowProductForm(true)}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <FaPlus className="mr-2" />
            Add Product
          </button>
        )}
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  {product.discount > 0 ? (
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">
                          ₹{(product.price * (1 - product.discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">{product.discount}% off</span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">₹{product.price}</span>
                  )}
                </div>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
              </div>
              {role === 'buyer' ? (
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className={`w-full px-4 py-2 rounded-lg flex items-center justify-center ${
                    product.stock === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  } transition-colors`}
                >
                  <FaShoppingCart className="mr-2" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              ) : (
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="p-4">
              <button
                onClick={() => setShowCart(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
              <Cart
                items={cartItems}
                onUpdateQuantity={updateCartQuantity}
                onRemoveItem={removeFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      )}

      {/* Product Form Modal */}
      {showProductForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          onClose={() => {
            setShowProductForm(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}
