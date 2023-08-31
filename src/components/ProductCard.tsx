import Image from "next/image";

import { Button } from "./ui/button";
import StarRating from "./StarRating";
import { ShoppingCart } from "lucide-react";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-md">
      <div className="relative w-full aspect-[1/0.65] rounded-t-md overflow-hidden flex-shrink-0">
        {/* Image */}
        <Image
          src="/white-and-brown-living-room-set.jpg"
          alt="product image"
          referrerPolicy="no-referrer"
          fill
        />
      </div>

      <div className="flex flex-col pt-4 gap-3 p-4">
        <h5 className="text-lg font-medium">White and brown living room set</h5>

        <p className="text-zinc-600 text-sm line-clamp-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vel
          aliquid provident repellat quia voluptas.
        </p>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">$239.00</p>
            <StarRating rating={1} />
          </div>

          <Button variant="outline" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
