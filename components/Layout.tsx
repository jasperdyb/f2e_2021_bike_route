import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { useGetSceneSpots } from "services/sceneSpots";

import { styled as muiStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Background from "components/Background";
import Navbar from "components/Navbar";
import MainInfoGrid from "components/MainInfoGrid";
import InfoCard, { InfoCardContainer } from "components/InfoCard";
import MainButton from "components/MainButton";
import Footer from "components/Footer";
import ImageWithFallback from "components/ImageWithFallback";

import indexBackground from "@img/bg01.jpg";
import index_route from "@img/index_route.jpg";
import index_busStation from "@img/index_busStation.jpg";

import index_news01 from "@img/index_news01.jpg";

import bike_boy from "@img/boyWithRoute.png";

const DescriptionContainer = styled("div")`
  background-color: white;
`;
const DescriptionBody = styled(Stack)`
  max-width: 860px;
  margin: 0 auto;
  padding: 22px 0 69px 0;
`;

const BikeBoyImage = styled(Image)`
  /* transform: matrix(-0.95, 0.31, 0.31, 0.95, 0, 0); */
`;

const InfoCardHalfContainer = styled("div")`
  width: 50%;
  height: 100%;
`;

const BorderStack = muiStyled(Stack)(
  ({ theme }) => `
  border-color:${theme.palette.divider};  
  border-width: 1px;
  border-style: solid;
`
);

const FaqStack = muiStyled(Stack)(
  ({ theme }) => ` 
  background-color: ${theme.palette.common.white};  
  padding-top: 56px;
  padding-bottom: 64px;
`
);
const FaqStackTitle = styled(Typography)`
  margin-bottom: 56px;
`;

const FaqStackList = styled(Stack)`
  margin-bottom: 40px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>TaiwanTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background image={indexBackground}>
        <Navbar color="info" />
        {children}
      </Background>
      <Footer>
        <Typography>
          BikeFun © 2021 Designer Vum. Engineer Jasper Chen. All rights
          reserved.
        </Typography>
      </Footer>
    </>
  );
};
export default Layout;
