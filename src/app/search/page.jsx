import Results from '@/components/Results';
import Error from '../error';

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || '';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Optional: Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data from the API. Status: ${res.status}`);
    }

    const data = await res.json();

    return (
      <div>
        <h1 className="text-center text-2xl font-bold">Search Results</h1>
        {data.results.length ? (
          <Results results={data.results} />
        ) : (
          <p className="text-center">No results found for "{query}"</p>
        )}
      </div>
    );
  } catch (error) {
    return <Error message={error.message} />;
  }
}
