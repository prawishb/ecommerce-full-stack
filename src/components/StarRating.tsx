"use client";

import { Star } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  rating: 1 | 2 | 3 | 4 | 5 | 6;
};

const StarRating = ({ rating }: Props) => {
  return (
    <div className="w-fit flex gap-1">
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />

      <span className="text-xs ml-2">(121)</span>
    </div>
  );
};

export default StarRating;
