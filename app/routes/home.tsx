import { Link } from "react-router-dom"; // It's conventional to use react-router-dom
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESTExplorer" },
    { name: "Check out country data!", content: "Welcome to RESTExplorer." },
  ];
}

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section with Gradient Background and Refined Padding */}
      <section className="px-4 py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container items-center max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center sm:-mx-4">
            <div className="w-full md:w-1/2 md:px-4">
              <div className="space-y-6 max-w-lg">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Explore Countries with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                    Real-Time Data
                  </span>
                </h1>
                <p className="text-lg text-slate-600">
                  Discover details about every country around the world – from
                  capitals to regions!
                </p>
                {/* 2. Buttons with Enhanced Hover Effects */}
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/countries"
                    className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
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
                    className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-3 text-lg font-semibold text-slate-700 bg-slate-200 rounded-lg shadow-md hover:bg-slate-300 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Scenic view of a coastal city"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New "Features" Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Why Use REST<span className="text-indigo-600">Explorer</span> ?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            All the information you need about the world, right at your
            fingertips.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Up-to-Date Info
              </h3>
              <p className="text-slate-500">
                Access the latest demographic and geographic data for every
                country.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Powerful Search
              </h3>
              <p className="text-slate-500">
                Instantly find any country or filter by region with our
                easy-to-use tools.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Real-Time Data
              </h3>
              <p className="text-slate-500">
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
