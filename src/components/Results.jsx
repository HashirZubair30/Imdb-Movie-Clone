// src/components/Results.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Results({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {results.map((result) => (
        <Link
          key={result.id}
          href={`/movie/${result.id}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              alt={result.title || result.original_title}
              width={500}
              height={750}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{result.title || result.original_title}</h2>
              <p className="text-gray-700 mb-2 line-clamp-1">{result.overview}</p>
              <p className="text-gray-500 mb-2"><strong>Release Date:</strong> {result.release_date}</p>
              <p className="text-gray-500 mb-2"><strong>Rating:</strong> {result.vote_average} / 10</p>
              <p className="text-gray-500 mb-2"><strong>Language:</strong> {result.original_language}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
