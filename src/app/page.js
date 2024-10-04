// src/app/page.jsx
import Results from '@/components/Results';
import Error from './error';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    console.log('Fetching data from URL:', url); // Log the full URL being fetched
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
      throw new Error(`Failed to fetch data from the API. Status: ${res.status}`);
    }

    const data = await res.json();
    console.log('Fetched data:', data); // Log the actual data received

    return (
      <div>
        <h1 className="text-center text-2xl font-bold">Movie Results</h1>
        {data.results && data.results.length > 0 ? (
          <Results results={data.results} />
        ) : (
          <Error message="No movies found. Please try again later." />
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return <Error message={error.message} />;
  }
}
