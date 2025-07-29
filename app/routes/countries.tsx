import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

// app/routes/countries.tsx
export async function clientLoader() {
  try {
    // Specify the fields you need (e.g., name, region, population, capital, cca3, flags)
    // Add more fields if your component uses them, up to 10.
    const fields = "name,region,population,capital,cca3,flags";
    const res = await fetch(
      `https://restcountries.com/v3.1/all?fields=${fields}`
    );

    if (!res.ok) {
      console.error(
        `API Error: ${res.status} ${res.statusText} - Could not load countries.`
      );

      try {
        const errorData = await res.json();
        console.error("API Error Details:", errorData);
      } catch (jsonError) {
        console.error("API returned non-JSON error response.");
      }
      return []; // Ensure an array is always returned
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("API returned non-array data for /all endpoint:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Network or parsing error fetching countries:", error);
    return [];
  }
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    // 1. Softer page background and more generous padding
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 2. Refined heading with better spacing and font weight */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-800 text-center">
          <span className="text-indigo-600">Explore</span> The World
        </h2>

        {/* 3. Modernized filter section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Search Input with Icon */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
          </div>
          {/* Region Select Dropdown */}
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full md:w-1/3 py-3 px-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {/* 4. Improved Grid with redesigned cards */}
        {filteredCountries.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No countries match your search.
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {filteredCountries.map((country: any) => (
              <li key={country.cca3}>
                {/* Entire card is now a link */}
                <Link
                  to={`/countries/${country.name.common}`}
                  className="block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl group"
                >
                  {country.flags?.svg ? (
                    <img
                      src={country.flags.svg}
                      alt={`Flag of ${country.name.common}`}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">
                      {country.name.common}
                    </h3>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>
                        <span className="font-semibold">Population:</span>{" "}
                        {country.population.toLocaleString()}
                      </p>
                      <p>
                        <span className="font-semibold">Region:</span>{" "}
                        {country.region}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}