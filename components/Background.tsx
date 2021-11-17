import React from "react";
import Image from "next/image";
import { ImageProps } from "next/image";
import styled from "styled-components";

import { styled as muiStyled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

import { Logo } from "@svg";
import { Hotel, ArrowRight } from "public/icon";

const BackgroundContainer = styled("div")`
  overflow: hidden;
`;

const BackgroundImageContainer = styled("div")`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -100;
`;

const LogoContainer = styled(Grid)`
  margin-top: 219px;
  margin-bottom: 224px;
  z-index: 0;
`;

// const Logo = styled(Image)``;

const ColorLogo = styled(Logo)`
  fill: red;
  stroke: pink;
  color: salmon;
  background-color: green;
`;

const ColoredTypography = muiStyled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.common.white};
`
);

const Slogan = styled(ColoredTypography)`
  text-align: end;
  margin-right: -101px;
`;

const BackgroundImageChildrenContainer = styled("div")`
  position: relative;
  z-index: 0;
`;

interface Props {
  image: ImageProps["src"];
  logo?: ImageProps["src"];
}

const Background: React.FC<Props> = ({ image, logo, children }) => {
  return (
    <BackgroundContainer>
      <BackgroundImageContainer>
        <Image
          src={image}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </BackgroundImageContainer>
      <BackgroundImageChildrenContainer>
        {Logo && (
          <LogoContainer
            container
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Grid item>
              <Logo />
              <Slogan typography={"h1"}>Bike Fun！自行車旅遊網</Slogan>
            </Grid>
          </LogoContainer>
        )}
        {children}
      </BackgroundImageChildrenContainer>
    </BackgroundContainer>
  );
};

export default Background;
