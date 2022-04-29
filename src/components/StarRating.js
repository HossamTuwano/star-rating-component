import React from "react";
import { FaStar } from "react-icons/fa";
import { Star } from "./Star";
import { useState } from "react";

const createArray = (length) => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setselectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setselectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
