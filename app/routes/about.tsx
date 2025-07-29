// Create a new file for this component, e.g., app/routes/about.tsx

export default function About() {
  return (
    // 1. Main container with a soft background for consistency
    <div className="bg-slate-50 min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* 2. A "card" to hold the content, giving it structure */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* 3. A more impactful heading */}
          <h1 className="text-center text-4xl font-extrabold text-slate-900 mb-4">
            About This Website
          </h1>
          <p className="text-center text-lg text-slate-500 mb-10">
            Our mission is to provide a beautiful and interactive way to explore
            the world's nations.
          </p>

          {/* 4. Using prose for beautiful typography on the text block */}
          <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
            <p>
              This website uses the{" "}
              <a
                href="https://restcountries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                REST Countries API
              </a>{" "}
              to display comprehensive information about countries from around
              the world.
            </p>
            <p>
              Explore our data to learn about country names, capitals, regions,
              populations, flags, and much more. Whether you're curious about a
              particular country or looking for insights about global regions,
              our interactive explorer makes it easy.
            </p>
          </div>

          {/* 5. A divider to separate sections */}
          <hr className="my-10" />

          {/* 6. A new "Technology Stack" section with logos */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Technology Stack
            </h2>
            <p className="text-slate-600 mb-6">
              This application is built with modern web technologies to ensure a
              seamless and responsive user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              {/* React Router */}
              <a
                href="https://reactrouter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="w-10 h-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M737.5,532.5l-225,125a25,25,0,0,1-25-43.75l100-56.25-100-56.25a25,25,0,0,1,25-43.75l225,125A25,25,0,0,1,737.5,532.5Z"></path>
                  <path d="M512,1024A512,512,0,1,1,902.63,241.38,25,25,0,0,1,867.28,276.7a462,462,0,1,0,3,470.6,25,25,0,0,1,32.35,35.34A508.43,508.43,0,0,1,512,1024Z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    React Router v7
                  </h3>
                  <p className="text-sm text-slate-500">
                    For seamless client-side routing.
                  </p>
                </div>
              </a>
              {/* Tailwind CSS */}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 256 154"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M128 0C93.867 0 72.533 21.333 72.533 55.467c0 21.333 10.667 36.266 27.734 42.666-19.2 4.267-34.134 17.067-34.134 38.4C66.133 147.2 76.8 153.6 89.6 153.6c32 0 44.8-23.467 44.8-51.2 0-21.333-10.667-34.133-27.733-42.667 19.2-4.266 32-17.066 32-38.4C138.667 10.667 128 0 128 0zM170.667 0c-34.134 0-55.467 21.333-55.467 55.467 0 21.333 10.667 36.266 27.734 42.666-19.2 4.267-34.134 17.067-34.134 38.4 0 10.666 10.667 17.066 23.467 17.066 32 0 44.8-23.467 44.8-51.2 0-21.333-10.667-34.133-27.733-42.667 19.2-4.266 32-17.066 32-38.4C181.333 10.667 170.667 0 170.667 0z"
                    fill="#38BDF8"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">Tailwind CSS</h3>
                  <p className="text-sm text-slate-500">
                    For a beautiful, responsive UI.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
