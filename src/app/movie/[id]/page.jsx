// src/app/movie/[id]/page.jsx
import React from 'react';
import Image from 'next/image';
import Error from '@/app/error'; // Adjust the import path if necessary

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const { id } = params;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  try {
    console.log('Fetching movie details from URL:', url); // Log the full URL being fetched
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Log the response status and headers
    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);

    if (!res.ok) {
      throw new Error(`Failed to fetch movie details. Status: ${res.status}`);
    }

    const movie = await res.json();
    console.log('Fetched movie details:', movie); // Log the actual data received

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="relative max-w-4xl w-full bg-gray-800 text-white rounded-lg overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full h-96 object-cover absolute top-0 left-0"
          />
          <div className="relative p-6 pt-80 bg-gray-800 bg-opacity-80">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="text-lg mb-4">{movie.overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
              <p><strong>Language:</strong> {movie.original_language}</p>
              <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
              <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
              <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
              <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    return <Error message={error.message} />;
  }
}
