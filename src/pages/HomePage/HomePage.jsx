import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to the Home Page
      </header>
      <p className="text-gray-700 text-lg">
        This is a basic homepage styled with Tailwind CSS.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}

export default HomePage;