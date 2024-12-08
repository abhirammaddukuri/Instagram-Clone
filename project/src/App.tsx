import React from 'react';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';
import { Suggestions } from './components/Suggestions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Stories />
            <Feed />
          </div>
          
          <div className="hidden md:block">
            <div className="fixed w-[350px]">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                  alt="Your profile"
                  className="h-12 w-12 rounded-full border p-[2px]"
                />
                <div>
                  <div className="font-semibold">your_username</div>
                  <div className="text-sm text-gray-500">Your Name</div>
                </div>
              </div>
              
              <Suggestions />
              
              <div className="mt-8 text-xs text-gray-400">
                © 2024 INSTAGRAM CLONE FROM STACKBLITZ
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;