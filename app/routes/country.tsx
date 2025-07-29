import { Link } from "react-router-dom"; // Use react-router-dom for the back link
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

// Helper component for displaying detail items to avoid repetition
function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div>
      <dt className="text-sm font-semibold text-slate-600">{label}</dt>
      <dd className="text-base text-slate-800">{value}</dd>
    </div>
  );
}

export default function Country({ loaderData }: Route.ComponentProps) {
  // 1. Extract more useful data from the API response
  const countryData = loaderData[0];
  const country = {
    name: countryData?.name?.common || "N/A",
    officialName: countryData?.name?.official || "N/A",
    region: countryData?.region || "N/A",
    subregion: countryData?.subregion || "N/A",
    capital: countryData?.capital?.[0] || "N/A",
    population: countryData?.population?.toLocaleString() || "N/A",
    currencies: countryData?.currencies
      ? Object.values(countryData.currencies)
          .map((c) => (c as { name: string }).name)
          .join(", ")
      : "N/A",
    languages: countryData?.languages
      ? Object.values(countryData.languages).join(", ")
      : "N/A",
    flagUrl: countryData?.flags?.svg || countryData?.flags?.png || "", // Prefer SVG for quality
  };

  return (
    // 2. Main container with a soft background to match the list page
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* 3. A "Back" button for better UX */}
        <Link
          to="/countries"
          className="inline-flex items-center gap-2 mb-8 text-slate-600 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Countries
        </Link>

        {/* 4. Main content card with a modern shadow and layout */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Flag Image */}
            <div className="flex justify-center items-center p-4">
              {country.flagUrl ? (
                <img
                  src={country.flagUrl}
                  alt={`Flag of ${country.name}`}
                  className="w-full max-w-lg rounded-lg object-contain"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 rounded-lg">
                  No Flag Available
                </div>
              )}
            </div>

            {/* Country Details */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-2">
                {country.name}
              </h2>
              <p className="text-slate-500 mb-8 text-lg">
                {country.officialName}
              </p>

              {/* 5. Details organized in a responsive grid for scannability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                <DetailItem label="Population" value={country.population} />
                <DetailItem label="Region" value={country.region} />
                <DetailItem label="Subregion" value={country.subregion} />
                <DetailItem label="Capital" value={country.capital} />
                <DetailItem label="Currencies" value={country.currencies} />
                <DetailItem label="Languages" value={country.languages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
