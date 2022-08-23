import React from "react";

export const Stars = ({ name, starStyle, fillStyle, outStyle, rating }) => {
  return (
    <>
      {[...Array(rating)].map((_, id) => (
        <i
          key={`${name}-fill-${id}`}
          className={`fa-solid fa-star ${starStyle} ${fillStyle}`}
        />
      ))}
      {[...Array(5 - rating)].map((_, id) => (
        <i
          key={`${name}-out-${id}`}
          className={`fa-regular fa-star ${starStyle} ${outStyle}`}
        />
      ))}
    </>
  );
};
