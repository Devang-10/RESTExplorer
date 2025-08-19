import { Link } from "react-router-dom";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESTExplorer" },
    { name: "Check out country data!", content: "Welcome to RESTExplorer." },
  ];
}

export default function Home() {
  return (
    // Main container with dark theme and relative positioning for aurora blobs
    <main className="bg-slate-900 text-slate-200 relative overflow-hidden animate-fadeIn">
      {/* Aurora Background Blobs - Colors updated to cyan/teal */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 -left-64 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-1"></div>
        <div className="absolute top-1/2 -right-64 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-24 sm:py-32">
        <div className="container items-center max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="space-y-6 max-w-lg">
                {/* Headline text gradient updated to cyan/teal */}
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
                  Explore Countries with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
                    Real-Time Data
                  </span>
                </h1>
                <p className="text-lg text-slate-400">
                  Discover details about every country around the world – from
                  capitals to regions!
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  {/* Primary button colors updated to cyan */}
                  <Link
                    to="/countries"
                    className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-700 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-500/50"
                  >
                    Explore Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5-5 5M6 12h12"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/about"
                    className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-3 text-lg font-semibold text-slate-200 bg-slate-800/50 border border-slate-700 rounded-lg shadow-md hover:bg-slate-700/70 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 px-4 flex items-center justify-center">
              <div className="relative">
                {/* Subtle glow effect to match the theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 blur-xl opacity-5"></div>
                <img
                  src="/globe - Copy.png"
                  alt="Holographic style globe"
                  className="relative w-full max-w-xlg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Colors updated to cyan/teal */}
      <section className="relative z-10 py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 sm:text-4xl">
            Why Use REST<span className="text-cyan-400">Explorer</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16">
            All the information you need about the world, right at your
            fingertips.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-slate-800/20 backdrop-blur-lg p-8 rounded-xl border border-slate-700 shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2">
              <div className="bg-cyan-500/10 text-cyan-400 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Up-to-Date Info
              </h3>
              <p className="text-slate-400">
                Access the latest demographic and geographic data for every
                country.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-slate-800/20 backdrop-blur-lg p-8 rounded-xl border border-slate-700 shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2">
              <div className="bg-cyan-500/10 text-cyan-400 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Powerful Search
              </h3>
              <p className="text-slate-400">
                Instantly find any country or filter by region with our
                easy-to-use tools.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-slate-800/20 backdrop-blur-lg p-8 rounded-xl border border-slate-700 shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2">
              <div className="bg-cyan-500/10 text-cyan-400 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Real-Time Data
              </h3>
              <p className="text-slate-400">
                Our information is powered by a live API, ensuring you get
                current facts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
