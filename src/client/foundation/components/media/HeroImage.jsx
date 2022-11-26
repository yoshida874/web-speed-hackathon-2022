import React from "react";

/**
 * @typedef Props
 * @property {number} height
 * @property {number} width
 * @property {string} src
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ height, src, width }) => {
  return (
    <img
      height={height}
      loading="lazy"
      src={src}
      style={{ aspectRatio: "16 / 9", height: "auto", width: "100%" }}
      width={width}
    />
  );
};
