import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      {/* Dynamic Island */}
      <div className="flex justify-center mb-12">
        <div className="w-32 h-9 rounded-full bg-secondary" />
      </div>

      <div className="w-full max-w-md text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-emerald-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Account Created!
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base mb-2">
          Your account has been successfully created.
        </p>
        <p className="text-gray-500 text-base mb-8">
          Welcome to Man-Mahcita!
        </p>

        {/* Subtext */}
        <p className="text-gray-400 text-sm mb-12">
          You can now access all features and start managing your finances.
        </p>

        {/* Get Started Button */}
        <Link
          to="/"
          className="block w-full py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition-colors mb-3"
        >
          Get Started
        </Link>

        {/* Secondary Button */}
        <Link
          to="/"
          className="block w-full py-4 rounded-2xl bg-[#FEF6E7] text-amber-600 font-semibold text-lg hover:bg-amber-50 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
