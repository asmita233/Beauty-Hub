import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 for navigation

function Signup() {
  // const [signup,setSignup]=useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // 👈 create navigate function

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields!");
      return;
    }

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signed up successfully! 🎉");

    // Navigate to home page
    navigate("/home"); // 👈 route to homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Create Account ✨
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Sign up to start your journey with us
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:scale-[1.02] transform transition-all duration-200"
          >
            Sign Up 🚀
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
