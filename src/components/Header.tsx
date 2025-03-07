import { Menu, User } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4 text-white fixed top-0 left-0 right-0 bg-[#2196F3] ">
        <button className="text-white hover:bg-blue-600">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Menu</span>
        </button>
        <div className="flex items-center gap-4">
        <div data-testid="toggle-mode"  className="text-white flex items-center justify-center "><ModeToggle /></div>
            
          <button className="text-white hover:bg-blue-600">
            <User className="w-6 h-6" />
            <span className="sr-only">User</span>
          </button>
        </div>
      </div>
    </>
  );
};
