import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
      console.log(":3", email);
    }
  };

  return (
    <div data-testid="form" className="w-full pb-40 max-w-md bg-white dark:bg-gray-950 rounded-t-3xl p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-2">
        <label
          htmlFor="email"
          className="text-gray-600 dark:text-gray-300 font-medium block mb-2 mt-4"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          placeholder="Enter your email address"
          className="rounded-xl h-12 px-4 dark:bg-gray-700 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button
          type="submit"
          className="w-full bg-[#2196F3] hover:bg-blue-600 text-white rounded-full h-14 text-lg font-medium"
        >
          Continue with Email
        </Button>
      </form>

      <div className="flex items-center justify-center gap-4 py-2">
        <span className="text-gray-600 dark:text-gray-300">
          Or continue with
        </span>
      </div>

      <Button
        variant="outline"
        className="w-full h-14 rounded-full border-black dark:border-gray-300 flex items-center justify-center gap-4 text-black dark:text-white font-medium"
      >
        <FcGoogle style={{ width: "24px", height: "24px" }} />
        <span>Continue with Google</span>
      </Button>

      <Button
        variant="outline"
        className="w-full h-14 rounded-full border-black dark:border-gray-300 flex items-center justify-center gap-4 text-black dark:text-white font-medium"
      >
        <FaApple style={{ width: "24px", height: "24px" }} />
        <span>Continue with Apple</span>
      </Button>
    </div>
  );
};
