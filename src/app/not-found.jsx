import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found | StudyNook",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      {/* Card */}
      <div className="relative z-10 bg-white/70 backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100 p-12 max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-6">
          <p className="text-[8rem] font-black leading-none bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent select-none drop-shadow-sm">
            404
          </p>
         
          
        </div>

        {/* Divider */}
        <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mb-6" />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-slate-500 text-base leading-relaxed mb-8">
          Oops! The study spot you&apos;re looking for seems to have moved or
          doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        {/* Back to Home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.75L12 3l9 6.75V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.75Z" />
            <path d="M9 21V12h6v9" />
          </svg>
          Back to Home
        </Link>

      </div>

    </div>
  );
}
