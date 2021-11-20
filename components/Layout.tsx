import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

import { styled as muiStyled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import Background from "components/Background";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

interface Props {
  backgroundImage: string;
  logo?: string;
}
const Layout: React.FC<Props> = ({ backgroundImage, logo, children }) => {
  return (
    <>
      <Head>
        <title>TaiwanTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background image={backgroundImage} logo={logo}>
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
