import React from "react";

/**
 * @typedef Props
 * @property {number} height
 * @property {number} width
 * @property {string} src
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ src }) => {
  return (
    <img
      height={225}
      src={src}
      style={{ aspectRatio: "16 / 9", height: "auto", maxWidth: "100%" }}
      width={400}
    />
  );
};
