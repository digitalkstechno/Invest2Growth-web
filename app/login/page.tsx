"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#FDFAF5] text-zinc-900 py-10 px-4 sm:px-6">
      <div className="w-full max-w-[480px] mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-7 sm:p-9 md:p-10">
        {/* Top Header: Logo + Back Link */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <Link href="/" className="inline-block">
            <img
              src="/logo.png"
              alt="invest2growth"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-xs font-[family-name:var(--font-poppins)] text-gray-500 hover:text-[#015BE1] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1 mb-6 sm:mb-7">
          <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl sm:text-[26px] text-[#001D4A] tracking-tight leading-tight">
            Sign In to Invest2Growth
          </h1>
          <p className="font-[family-name:var(--font-poppins)] text-xs sm:text-[13px] text-gray-500 leading-relaxed">
            Enter your email address and password to access your account
          </p>
        </div>

        {isLoggedIn ? (
          /* Success State */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-[#00A179] flex items-center justify-center border border-emerald-100 shadow-xs animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-xl text-gray-900">
              Login Successful!
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
              Welcome back to Invest2Growth. Redirecting you to your account...
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#002D5E] text-white font-[family-name:var(--font-poppins)] font-semibold text-sm hover:bg-[#001D4A] transition-colors mt-2"
            >
              <span>Go to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Email & Password Form */
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block font-[family-name:var(--font-poppins)] font-medium text-xs text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative flex items-center h-[46px] px-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus-within:border-[#015BE1] focus-within:ring-2 focus-within:ring-[#015BE1]/15 transition-all">
                <Mail className="w-4 h-4 text-gray-400 shrink-0 mr-2.5" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-none outline-none font-[family-name:var(--font-poppins)] text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-[family-name:var(--font-poppins)] font-medium text-xs text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative flex items-center h-[46px] px-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus-within:border-[#015BE1] focus-within:ring-2 focus-within:ring-[#015BE1]/15 transition-all">
                <Lock className="w-4 h-4 text-gray-400 shrink-0 mr-2.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent border-none outline-none font-[family-name:var(--font-poppins)] text-sm text-gray-900 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-[46px] rounded-xl bg-[#002D5E] hover:bg-[#001D4A] active:scale-[0.99] text-white font-[family-name:var(--font-poppins)] font-semibold text-sm shadow-md shadow-[#002D5E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
