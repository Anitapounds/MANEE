import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Placeholder() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathToTitle: Record<string, string> = {
    "/send-money": "Send Money",
    "/reminders": "Reminders",
    "/split-bill": "Split Bill",
    "/speak-to-ai": "Speak to AI",
    "/settings": "Settings",
    "/transactions": "Transaction History",
    "/profile": "Profile",
    "/transaction/1": "Transaction Details",
    "/transaction/2": "Transaction Details",
    "/transaction/3": "Transaction Details",
  };

  const title = pathToTitle[location.pathname] || "Page";

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Island */}
      <div className="flex justify-center pt-4 mb-8">
        <div className="w-32 h-9 rounded-full bg-secondary" />
      </div>

      <div className="px-4 max-w-md mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-12 p-2 -ml-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Content */}
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-gray-500 mb-8">
            This page will be implemented soon. Check back later!
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}