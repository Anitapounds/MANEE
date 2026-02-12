import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Otp() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer for resend button
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0 && !canResend) {
      setCanResend(true);
    }
  }, [resendTimer, canResend]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(""); // Clear error on new input

    // Move to next field if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("").concat(new Array(6 - pastedData.length).fill(""));
      setOtp(newOtp as string[]);
      inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // For demo: accept "000000" as success, anything else as error
      if (code === "000000") {
        navigate("/success");
      } else {
        setError("Invalid OTP. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResend = () => {
    setCanResend(false);
    setResendTimer(60);
    setError("");
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    // Here you would call the resend OTP API
    console.log("Resending OTP...");
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

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

        {/* Heading */}
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Verify your email
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Enter the 6-digit code we sent to your email
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* OTP Input Fields */}
        <div className="mb-8">
          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-14 h-14 text-center text-2xl font-bold rounded-xl border-2 bg-white transition-all ${
                  error
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                } focus:outline-none`}
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={!isOtpComplete || isLoading}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all mb-6 ${
            isOtpComplete && !isLoading
              ? "bg-amber-500 text-white hover:bg-amber-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? "Verifying..." : "Verify"}
        </button>

        {/* Resend Code */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Didn't receive the code?</p>
          <button
            onClick={handleResend}
            disabled={!canResend || isLoading}
            className={`text-sm font-medium transition-colors ${
              canResend
                ? "text-amber-500 hover:text-amber-600"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            {canResend ? "Resend code" : `Resend code in ${resendTimer}s`}
          </button>
        </div>
      </div>
    </div>
  );
}
