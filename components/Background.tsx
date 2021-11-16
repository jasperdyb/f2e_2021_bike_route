import React from "react";
import Image from "next/image";
import { ImageProps } from "next/image";
import styled from "styled-components";

const BackgroundImageContainer = styled("div")`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -100;
`;

const BackgroundImageChildrenContainer = styled("div")`
  position: relative;
  z-index: 0;
`;

const Background: React.FC<ImageProps> = ({ src, children }) => {
  return (
    <BackgroundImageContainer>
      <Image
        src={src}
        alt="Background image"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
      />
      <BackgroundImageChildrenContainer>
        {children}
      </BackgroundImageChildrenContainer>
    </BackgroundImageContainer>
  );
};

export default Background;
