import Results from "@/app/components/Results";
import React from "react";

export default async function SearchPage({ params }: any) {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&page=1&language=en-US`
  );

  if (!res.ok) {
    console.error("API error: ", res.status, res.statusText);
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  //   console.log(data);

  const results = data.results;

  //   console.log(results);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
