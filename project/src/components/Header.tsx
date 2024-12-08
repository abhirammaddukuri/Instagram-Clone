import React from 'react';
import { Camera, Heart, Home, MessageCircle, PlusSquare, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Instagram</div>
        
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Home className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          <MessageCircle className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          <PlusSquare className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          <Camera className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          <Heart className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer border-2 border-gray-200"
          />
        </nav>
      </div>
    </header>
  );
}