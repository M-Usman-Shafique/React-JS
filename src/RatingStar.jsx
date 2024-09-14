import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function RatingStar({ total = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0)

  const stars = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          {(hover || rating) >= star ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
}

export default RatingStar;
