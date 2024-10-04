'use client'

import React from 'react';

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-red-500">Oops! Something went wrong.</h1>
        <p className="mt-2 text-lg">We couldn't fetch the movies. Please try again later.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
