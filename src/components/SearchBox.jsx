'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-md w-full max-w-md"
      />
      <button
        type="submit"
        style={{ backgroundColor: 'rgba(254,243,198,255)' }}
        className="text-black p-2 rounded-r-md hover:bg-yellow-300"
      >
        Search
      </button>
    </form>
  );
}
