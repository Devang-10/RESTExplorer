import { Link } from "react-router-dom";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

// UPDATED: Helper component with dark theme text colors
function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div>
      <dt className="text-sm font-semibold text-slate-400">{label}</dt>
      <dd className="text-base text-slate-100">{value}</dd>
    </div>
  );
}

export default function Country({ loaderData }: Route.ComponentProps) {
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
    flagUrl: countryData?.flags?.svg || countryData?.flags?.png || "",
  };

  return (
    // UPDATED: Main container to match the site's theme
    <main className="bg-slate-900 min-h-screen relative overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Aurora Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-1"></div>
        <div className="absolute -bottom-64 -right-64 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* UPDATED: "Back" button styled for dark theme */}
        <Link
          to="/countries"
          className="inline-flex items-center gap-2 mb-8 text-slate-200 hover:text-white transition-colors bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-700/70"
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

        {/* UPDATED: Main content card with glassmorphism effect */}
        <div className="bg-slate-800/20 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Flag Image */}
            <div className="p-8 flex justify-center items-center">
              <img
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className="w-full max-w-lg rounded-lg object-contain shadow-lg"
              />
            </div>

            {/* Country Details */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-2">
                {country.name}
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                {country.officialName}
              </p>

              {/* NEW: Divider for better visual separation */}
              <hr className="my-2 border-slate-700" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-8">
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
    </main>
  );
}
