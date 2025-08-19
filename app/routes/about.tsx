// app/routes/about.tsx

export default function About() {
  return (
    // UPDATED: Main container to match the site's dark theme
    <main className="bg-slate-900 min-h-screen relative overflow-hidden py-16 sm:py-20">
      {/* Aurora Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-32 right-0 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-1"></div>
        <div className="absolute top-64 -left-64 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full filter blur-3xl opacity-50 animate-aurora-2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* UPDATED: Main card with glassmorphism effect */}
        <div className="bg-slate-800/20 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-12">
          {/* UPDATED: Typography for dark theme */}
          <h1 className="text-center text-4xl font-extrabold text-slate-100 mb-4">
            About This Website
          </h1>
          <p className="text-center text-lg text-slate-400 mb-10">
            Our mission is to provide a beautiful and interactive way to explore
            the world's nations.
          </p>

          {/* UPDATED: Added "prose-invert" for automatic dark mode typography */}
          <div className="prose prose-lg prose-invert max-w-none text-slate-400 space-y-4">
            <p>
              This website uses the{" "}
              <a
                href="https://restcountries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold no-underline"
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

          {/* UPDATED: Divider for dark theme */}
          <hr className="my-10 border-slate-700" />

          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-2">
              Technology Stack
            </h2>
            <p className="text-slate-400 mb-6">
              This application is built with modern web technologies to ensure a
              seamless and responsive user experience.
            </p>
            {/* UPDATED: Tech stack links for dark theme */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* React Router */}
              <a
                href="https://reactrouter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <svg
                  className="w-10 h-10 text-slate-200" // Color changed
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M737.5,532.5l-225,125a25,25,0,0,1-25-43.75l100-56.25-100-56.25a25,25,0,0,1,25-43.75l225,125A25,25,0,0,1,737.5,532.5Z"></path>
                  <path d="M512,1024A512,512,0,1,1,902.63,241.38,25,25,0,0,1,867.28,276.7a462,462,0,1,0,3,470.6,25,25,0,0,1,32.35,35.34A508.43,508.43,0,0,1,512,1024Z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-100">React Router</h3>
                  <p className="text-sm text-slate-400">
                    For seamless client-side routing.
                  </p>
                </div>
              </a>
              {/* Tailwind CSS */}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
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
                  <h3 className="font-semibold text-slate-100">Tailwind CSS</h3>
                  <p className="text-sm text-slate-400">
                    For a beautiful, responsive UI.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
