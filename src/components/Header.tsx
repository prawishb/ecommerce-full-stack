import { navData } from "@/data/navData";

import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <div className="bg-zinc-900 w-full h-10"></div>
      <nav className="border-b">
        <div className="max-w-6xl mx-auto h-24 px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold">[Shop Logo]</h1>

            <ul className="flex items-center gap-4 font-medium">
              {navData.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="bg-zinc-100 h-10 w-64 rounded-md border"></div>
            <Button size="icon" className="flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button size="icon" className="flex items-center justify-center">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
