import { Link } from "react-router-dom";
import { Send, Bell, Users, MessageCircle, Settings, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Dynamic Island */}
      <div className="flex justify-center pt-4 mb-4">
        <div className="w-32 h-9 rounded-full bg-secondary" />
      </div>

      {/* Header with Balance */}
      <div className="px-4 pt-4 pb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-500 text-sm mb-1">Welcome back!</p>
            <h1 className="text-2xl font-bold text-foreground">Mama</h1>
          </div>
          <Link
            to="/settings"
            className="p-3 hover:bg-secondary rounded-lg transition-colors"
          >
            <Settings className="w-6 h-6 text-foreground" />
          </Link>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 text-white mb-6">
          <p className="text-sm opacity-90 mb-2">Available Balance</p>
          <div className="flex items-center gap-2">
            <h2 className="text-4xl font-bold">
              {showBalance ? "$2,450.00" : "••••••"}
            </h2>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {showBalance ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-8">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Send Money */}
          <Link
            to="/send-money"
            className="bg-white rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Send className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-foreground">Send Money</p>
          </Link>

          {/* Reminders */}
          <Link
            to="/reminders"
            className="bg-white rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Bell className="w-6 h-6 text-amber-600" />
            </div>
            <p className="text-sm font-medium text-foreground">Reminders</p>
          </Link>

          {/* Split Bill */}
          <Link
            to="/split-bill"
            className="bg-white rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <p className="text-sm font-medium text-foreground">Split Bill</p>
          </Link>

          {/* Speak to AI */}
          <Link
            to="/speak-to-ai"
            className="bg-white rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-foreground">Speak to AI</p>
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-600">Recent Activity</h3>
          <Link
            to="/transactions"
            className="text-amber-500 text-xs font-medium hover:text-amber-600 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {/* Transaction 1 */}
          <Link
            to="/transaction/1"
            className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Send className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Sent to Mum</p>
                <p className="text-xs text-gray-500">Today, 2:30 PM</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-emerald-600">-$20.00</p>
          </Link>

          {/* Transaction 2 */}
          <Link
            to="/transaction/2"
            className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">School PTA Reminder</p>
                <p className="text-xs text-gray-500">Yesterday, 10:00 AM</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-400">$0.00</p>
          </Link>

          {/* Transaction 3 */}
          <Link
            to="/transaction/3"
            className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Split Bill - John</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-amber-600">+$15.50</p>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-around">
          <Link
            to="/dashboard"
            className="flex flex-col items-center gap-1 p-2 text-amber-500"
          >
            <div className="w-6 h-6 bg-amber-100 rounded-lg" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            to="/send-money"
            className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600"
          >
            <Send className="w-6 h-6" />
            <span className="text-xs font-medium">Send</span>
          </Link>
          <Link
            to="/transactions"
            className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600"
          >
            <div className="w-6 h-6 border-2 border-current rounded-lg" />
            <span className="text-xs font-medium">History</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600"
          >
            <div className="w-6 h-6 border-2 border-current rounded-full" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}