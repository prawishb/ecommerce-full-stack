import Link from "next/link";

import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-4">
      <h3 className="text-xl font-semibold">
        Subscribe to our newsletter to get updates to our latest collections
      </h3>
      <p className="text-sm font-semibold text-zinc-600">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <form className="flex gap-2">
        <div className="w-80 h-10 rounded-md bg-zinc-300"></div>
        <Button>Subscribe</Button>
      </form>
      <div className="text-xs font-medium text-zinc-600">
        <p>You will be able to unsubscribe at any time.</p>
        <p>
          Read our Privacy Policy{" "}
          <Link href="#" className="underline">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
