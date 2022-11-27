import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

/**
 * @typedef Props
 * @type {object}
 * @property {string} url
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ url }) => {
  return (
    <Image
      alt=""
      height={735}
      src={url}
      style={{ height: "auto", width: "100%" }}
      width={1024}
    />
  );
};
