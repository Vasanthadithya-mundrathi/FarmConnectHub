import React, { useState, useEffect } from 'react';
import { FaStore, FaTractor, FaGripVertical } from 'react-icons/fa';

export default function RoleSwitcher({ currentRole, onRoleChange }) {
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('roleSwitcherPosition');
    return saved ? JSON.parse(saved) : { x: 20, y: 20 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('roleSwitcherPosition', JSON.stringify(position));
  }, [position]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      
      setPosition({
        x: Math.min(Math.max(0, e.clientX - dragStart.x), maxX),
        y: Math.min(Math.max(0, e.clientY - dragStart.y), maxY)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="fixed bg-white rounded-lg shadow-lg p-4 z-50 cursor-move select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '200px'
      }}
    >
      <div 
        className="flex items-center justify-between mb-3 text-gray-500"
        onMouseDown={handleMouseDown}
      >
        <span className="text-sm font-medium">Switch Role</span>
        <FaGripVertical className="cursor-grab" />
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => onRoleChange('buyer')}
          className={`w-full flex items-center p-2 rounded-lg transition-colors ${
            currentRole === 'buyer'
              ? 'bg-green-100 text-green-700'
              : 'hover:bg-gray-100'
          }`}
        >
          <FaTractor className="mr-2" />
          <span>Farmer (Buyer)</span>
        </button>
        
        <button
          onClick={() => onRoleChange('seller')}
          className={`w-full flex items-center p-2 rounded-lg transition-colors ${
            currentRole === 'seller'
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100'
          }`}
        >
          <FaStore className="mr-2" />
          <span>Seller</span>
        </button>
      </div>
    </div>
  );
}
