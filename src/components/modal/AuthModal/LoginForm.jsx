"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../../../context/LayoutProvider";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import authToken from "../../storage/authToken";

export const LoginForm = () => {
  const [email, setEmail] = useState("admin1@gmail.com");
  const [password, setPassword] = useState("admin");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const { setModal, setLoginForm } = useLayout();

  const handleEmailChange = (e) => {
    const value = e.target.value || email;
    setEmail(value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (email === "" || password === "") {
      toast.error("Vui lòng nhập nội dung.");
      return;
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      toast.error("Vui lòng nhập địa chỉ mail.");
      return;
    }
    if (email === "admin@gmail.com" && password === "admin") {
      toast.success("Đăng nhập thành công!");
      setModal(null);
      authToken.setToken("admin");
      setModal(null);
      return;
    }
    toast.error("Thông tin đăng nhập sai");
  };
  return (
    <>
      <div className="relative rounded-lg">
        <div className="relative px-8 pt-16 pb-20 rounded-lg bg-gradient-to-b from-[#d8c5ff] to-[#a7c7ff]">
          <h1 className="mb-12 text-5xl font-bold text-center text-white">
            Login
          </h1>

          {/* Email input */}
          <div className="relative mb-4">
            <div className="flex items-center px-4 py-3 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 outline-none"
                value={email}
                onChange={handleEmailChange}
              />
              {isValidEmail && (
                <div className="flex items-center justify-center w-6 h-6 bg-[#6ed788] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Password input */}
          <div className="relative mb-6">
            <div className="flex items-center px-4 py-3 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 mb-4 font-medium text-white transition-colors rounded-full bg-[#6a74cf] hover:bg-[#5a64bf]"
          >
            Login
          </button>

          {/* Forgot password link */}
          <div className="text-center pb-6">
            <Link to="#" className="text-white hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Background wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-24"
            >
              <defs>
                <linearGradient
                  id="pinkGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#9b87db" />
                  <stop offset="100%" stopColor="#efc2e3" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C150,260 280,-50 500,60 L500,150 L0,150 Z"
                fill="url(#pinkGradient)"
              />
              <path
                d="M0,60 C150,220 350,10 500,120 L500,150 L0,150 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>

        {/* Bottom section with social logins */}
        <div className="px-8 py-6 bg-white rounded-b-lg">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <button className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-[#e33e2b] bg-[#ffefed] rounded-md hover:bg-[#ffe0dc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 fill-[#e33e2b]"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              Login with Google
            </button>
            <button className="flex items-center justify-center flex-1 px-4 py-2 text-sm font-medium text-[#1877f2] bg-[#e7f3ff] rounded-md hover:bg-[#d8ebff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 fill-[#1877f2]"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Login with Facebook
            </button>
          </div>

          {/* Sign up link */}
          <div className="flex items-center justify-center mt-6 text-sm">
            <span className="text-gray-600">Don't have account?</span>
            <Link
              onClick={() => {
                setLoginForm("Register");
              }}
              className="ml-2 font-medium text-[#6a74cf] hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
