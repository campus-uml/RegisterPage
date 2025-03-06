import { Separator } from "@radix-ui/react-separator";
import { Button } from "../components/ui/button";
import { Input } from ".././components/ui/input";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Form = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div data-testid="form" className="w-full pb-40 max-w-md bg-white dark:bg-gray-950 rounded-t-3xl p-6 shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-gray-600 dark:text-gray-300 font-medium block mb-2 mt-4"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="rounded-xl h-12 px-4 dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button className="w-full bg-[#2196F3] hover:bg-blue-600 text-white rounded-full h-14 text-lg font-medium">
            Continue with Email
          </Button>

          <div className="flex items-center justify-center gap-4 py-2">
            <Separator className="w-16 border-t-[1px] border-gray-800 dark:border-gray-300" />
            <span className="text-gray-600 dark:text-gray-300">
              Or continue with
            </span>
            <Separator className="w-16 border-t-[1px] border-gray-800 dark:border-gray-300" />
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

          <h1 className="text-gray-700 dark:text-gray-300 text-lg text-center">
            Already have an account?{" "}
            <a className="text-[#2196F3] font-sans" href="">
              Login
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};
