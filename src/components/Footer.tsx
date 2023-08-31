import Link from "next/link";

import { footerData } from "@/data/footerData";

import Newsletter from "./Newsletter";
import PaymentOptions from "./PaymentOptions";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-16 h-full gap-8 flex justify-between">
        <div className="flex flex-col gap-4 max-w-md">
          <Newsletter />
          <PaymentOptions />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-medium">Departments</h4>
          <ul className="flex flex-col gap-2">
            {footerData.departments.map((link, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-zinc-900 hover:font-medium"
              >
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-medium">Support</h4>
          <ul className="flex flex-col gap-2">
            {footerData.support.map((link, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-zinc-900 hover:font-medium"
              >
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-medium">Company</h4>
          <ul className="flex flex-col gap-2">
            {footerData.company.map((link, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-zinc-900 hover:font-medium"
              >
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-300">
        <div className="max-w-6xl mx-auto py-8 px-4 flex items-center justify-between">
          <span>All Right reserved by [Shop Name] | 2023</span>

          <div className="flex items-center gap-4">
            <span>Terms of Service</span>
            <span>Privacy & Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
