import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout>();

  // Handle scroll detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(newSlide);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;

    const autoScroll = () => {
      const nextSlide = (currentSlide + 1) % 2;
      const targetScroll = nextSlide * slideWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    };

    autoScrollTimerRef.current = setInterval(autoScroll, 5000); // Auto-scroll every 5 seconds

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Dynamic Island - Fixed at top */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="w-32 h-9 rounded-full bg-secondary" />
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide h-screen"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      >
        {/* Screen 1: Transaction List */}
        <div className="min-w-full snap-center flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md pt-16">
            {/* Transaction Cards */}
            <div className="bg-white rounded-3xl shadow-sm mb-6 overflow-hidden">
              {/* Sent Item */}
              <div className="flex items-start gap-4 p-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm">Sent</h3>
                  <p className="text-gray-500 text-sm">Sent $20 to Mum.</p>
                </div>
              </div>

              {/* Reminder Item */}
              <div className="flex items-start gap-4 p-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm">Reminder</h3>
                  <p className="text-gray-500 text-sm">Henry school PTA.</p>
                </div>
              </div>

              {/* Nested List */}
              <div className="pl-5">
                {/* Schedule Payment Item */}
                <div className="flex items-start gap-4 p-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">Schedule Payment</h3>
                    <p className="text-gray-500 text-sm">$20 scheduled to be sent.</p>
                  </div>
                </div>

                {/* Sent Item (nested) */}
                <div className="flex items-start gap-4 p-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">Sent</h3>
                    <p className="text-gray-500 text-sm">Sent $20 to Mum.</p>
                  </div>
                </div>

                {/* Reminder Item (nested) */}
                <div className="flex items-start gap-4 p-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">Reminder</h3>
                    <p className="text-gray-500 text-sm">Henry school PTA.</p>
                  </div>
                </div>

                {/* Speak to AI Item */}
                <div className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">Speak to AI</h3>
                    <p className="text-gray-500 text-sm">AI active 24Hrs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-6">
              <div className={`h-2 rounded-full transition-all ${currentSlide === 0 ? 'w-10 bg-amber-500' : 'w-2 bg-gray-300'}`} />
              <div className={`h-2 rounded-full transition-all ${currentSlide === 1 ? 'w-10 bg-amber-500' : 'w-2 bg-gray-300'}`} />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
              Made to fit around<br />real life
            </h1>

            {/* Description */}
            <p className="text-center text-gray-500 mb-6 px-4 text-sm">
              Fast payment across border, schedule<br />and speak with AI agent 24/7.
            </p>

            {/* Buttons */}
            <div className="space-y-3 mb-4">
              <Link to="/signup" className="block w-full py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition-colors text-center">
                Sign Up
              </Link>
              <Link to="/login" className="block w-full py-4 rounded-2xl bg-[#FEF6E7] text-amber-600 font-semibold text-lg hover:bg-amber-50 transition-colors text-center">
                Log In
              </Link>
            </div>

            {/* Terms */}
            <p className="text-center text-xs text-gray-400 px-8">
              By signing in to Man-Mahoita you agree to our{" "}
              <span className="text-amber-500 font-medium">Terms and Conditions</span>
            </p>
          </div>
        </div>

        {/* Screen 2: Split Bill with Friends */}
        <div className="min-w-full snap-center flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md pt-16">
            {/* Friend Avatars Cluster */}
            <div className="relative h-72 mb-6">
              {/* Welcome Card */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white rounded-3xl shadow-lg px-6 py-4 z-10 w-11/12 max-w-sm">
                <h3 className="font-semibold text-gray-900 text-base mb-1">Welcome Mama!</h3>
                <p className="text-gray-600 text-sm">You successfully saved $400 from purchasing on Shein.</p>
                
                {/* Banana illustration */}
                <div className="absolute -bottom-2 right-4">
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                    <ellipse cx="40" cy="50" rx="30" ry="8" fill="#f59e0b" opacity="0.2"/>
                    <path d="M20 35 Q15 25, 20 15 Q25 10, 35 12 Q45 14, 50 20 Q52 30, 45 38 Q35 42, 25 40 Q18 38, 20 35Z" fill="#FDB022"/>
                    <path d="M35 12 Q40 8, 42 5 Q43 3, 41 2 Q39 1, 37 3 Q35 6, 35 12Z" fill="#7C5C3A"/>
                  </svg>
                </div>
              </div>

              {/* Friend Avatars in Flower Pattern */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm">
                {/* Center top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-pink-200 bg-pink-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-300" />
                </div>
                
                {/* Top left */}
                <div className="absolute top-8 left-12 w-16 h-16 rounded-full border-4 border-gray-200 bg-gray-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                </div>
                
                {/* Top right */}
                <div className="absolute top-8 right-12 w-16 h-16 rounded-full border-4 border-blue-200 bg-blue-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300" />
                </div>
                
                {/* Middle left */}
                <div className="absolute top-24 left-4 w-16 h-16 rounded-full border-4 border-gray-800 bg-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                </div>
                
                {/* Center */}
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-green-200 bg-green-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300" />
                </div>
                
                {/* Middle right */}
                <div className="absolute top-24 right-4 w-16 h-16 rounded-full border-4 border-red-200 bg-red-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-200 to-red-300" />
                </div>
                
                {/* Bottom left */}
                <div className="absolute top-40 left-12 w-16 h-16 rounded-full border-4 border-yellow-300 bg-yellow-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400" />
                </div>
                
                {/* Bottom right with coin */}
                <div className="absolute top-40 right-12 w-16 h-16 rounded-full border-4 border-yellow-300 bg-yellow-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400" />
                </div>
                
                {/* Coin decoration */}
                <div className="absolute top-36 right-6 w-10 h-10 rounded-full bg-yellow-400 border-3 border-amber-600 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-amber-600" />
                </div>
                
                {/* Decorative shapes */}
                <div className="absolute top-44 left-2 w-6 h-6 bg-blue-400 rotate-45" />
                <div className="absolute top-12 right-6 w-4 h-4 bg-red-400 rotate-12" />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-6">
              <div className={`h-2 rounded-full transition-all ${currentSlide === 0 ? 'w-10 bg-amber-500' : 'w-2 bg-gray-300'}`} />
              <div className={`h-2 rounded-full transition-all ${currentSlide === 1 ? 'w-10 bg-amber-500' : 'w-2 bg-gray-300'}`} />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
              Split bill with<br />friends
            </h1>

            {/* Description */}
            <p className="text-center text-gray-500 mb-6 px-4 text-sm">
              Easily split bills among friend and keep<br />in check with reminders.
            </p>

            {/* Buttons */}
            <div className="space-y-3 mb-4">
              <Link to="/signup" className="block w-full py-4 rounded-2xl bg-amber-500 text-white font-semibold text-lg hover:bg-amber-600 transition-colors text-center">
                Sign Up
              </Link>
              <Link to="/login" className="block w-full py-4 rounded-2xl bg-[#FEF6E7] text-amber-600 font-semibold text-lg hover:bg-amber-50 transition-colors text-center">
                Log In
              </Link>
            </div>

            {/* Terms */}
            <p className="text-center text-xs text-gray-400 px-8">
              By signing in to Man-Mahoita you agree to our{" "}
              <span className="text-amber-500 font-medium">Terms and Conditions</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
