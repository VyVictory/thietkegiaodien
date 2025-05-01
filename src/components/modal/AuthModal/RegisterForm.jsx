import { useState } from "react";
import { useLayout } from "../../../context/LayoutProvider";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { setModal, setLoginForm } = useLayout();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
    >
      <h1 className="mb-8 text-center text-2xl font-semibold text-black">
        Create New Account
      </h1>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-black">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full rounded-md border border-[#d0d0d0] bg-white px-3 py-2 text-black placeholder:text-[#7a7a7a]/60 focus:outline-none focus:ring-2 focus:ring-[#916bbf]/50"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue="itshaghighi@yahoo.com"
            className="w-full rounded-md border border-[#d0d0d0] bg-white px-3 py-2 text-[#916bbf] focus:outline-none focus:ring-2 focus:ring-[#916bbf]/50"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-black">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="w-full rounded-md border border-[#d0d0d0] bg-white px-3 py-2 pr-10 text-black placeholder:text-[#7a7a7a]/60 focus:outline-none focus:ring-2 focus:ring-[#916bbf]/50"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a7a7a]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-5 w-5 rounded border-[#916bbf] accent-[#916bbf]"
          />
          <label htmlFor="terms" className="text-sm leading-none">
            I agree with the{" "}
            <a href="#" className="text-[#916bbf] hover:underline">
              Terms of services
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#916bbf] hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#916bbf] py-3 text-white hover:bg-[#916bbf]/90 transition-colors"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <span className="text-[#7a7a7a]">I have account?</span>{" "}
          <Link
            onClick={() => setLoginForm("Login")}
            className="text-[#916bbf] hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
