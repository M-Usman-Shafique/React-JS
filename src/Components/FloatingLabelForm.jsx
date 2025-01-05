import React from "react";
import "./form.css";

export default function FloatingLabelForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action="#" className="w-full max-w-md space-y-8 px-8 py-6">
        <div className="text-center font-bold text-3xl">Create New Account</div>
        <div className="input-group">
          <input
            required
            className="inputs peer"
            id="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="username" className="labels">
            Username
          </label>
        </div>
        <div className="input-group">
          <input
            required
            className="inputs peer"
            id="email"
            type="email"
            placeholder="Email Address"
          />
          <label htmlFor="email" className="labels">
            Email Address
          </label>
        </div>
        <div className="input-group">
          <input
            required
            className="inputs peer"
            id="password"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="password" className="labels">
            Password
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-100 text-black px-4 py-2 rounded-md text-lg"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
