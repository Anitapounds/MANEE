import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        {/* Logo/Brand Area */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary/50 mb-6">
            <span className="text-5xl font-bold text-foreground">L</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Welcome
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A modern, minimal experience designed with care
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/onboarding" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Get Started
          </Link>
          <button className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
