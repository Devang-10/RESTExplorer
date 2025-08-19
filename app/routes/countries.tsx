import { Link } from "react-router-dom";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  try {
    const fields = "name,region,population,capital,cca3,flags";
    const res = await fetch(
      `https://restcountries.com/v3.1/all?fields=${fields}`
    );
    if (!res.ok) {
      console.error(
        `API Error: ${res.status} ${res.statusText} - Could not load countries.`
      );
      return [];
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
    // UPDATED: Main container to match homepage theme
    <main className="bg-slate-900 min-h-screen relative overflow-hidden">
      {/* Aurora Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 -left-64 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-1"></div>
        <div className="absolute top-1/2 -right-64 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* UPDATED: Heading with new theme colors */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-100 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
            Explore
          </span>{" "}
          The World
        </h2>

        {/* UPDATED: Modernized filter section for dark theme */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-500"
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
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
          {/* Region Select */}
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full md:w-auto md:min-w-[200px] py-3 px-4 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {filteredCountries.length === 0 ? (
          <div className="text-center text-slate-400 py-10">
            No countries match your search.
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCountries.map((country: any) => (
              <li key={country.cca3}>
                {/* UPDATED: Glassmorphism card with glowing hover effect */}
                <Link
                  to={`/countries/${country.name.common}`}
                  className="block bg-slate-800/20 backdrop-blur-lg border border-slate-700 rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 group"
                >
                  <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-100 mb-2 truncate group-hover:text-cyan-400 transition-colors">
                      {country.name.common}
                    </h3>
                    <div className="text-sm text-slate-400 space-y-1">
                      <p>
                        <span className="font-semibold text-slate-300">
                          Population:
                        </span>{" "}
                        {country.population.toLocaleString()}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-300">
                          Region:
                        </span>{" "}
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
    </main>
  );
}
