import type { NextPage } from "next";
import type { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGetSceneSpots } from "services/sceneSpots";

import { styled as muiStyled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Navbar from "components/Navbar";
import NavBreadCrumbs from "components/NavBreadCrumbs";
import SearchPanel from "components/SearchPanel";

import bg02 from "@img/bg02.jpg";

const HeaderImageContainer = styled("div")`
  position: relative;
  height: 300px;
  margin-top: -100px;
  margin-bottom: -50px;
`;

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

const Route = () => {
  return (
    <>
      <HeaderImageContainer>
        <Image
          src={bg02}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </HeaderImageContainer>
      <Navbar color="info" />
      <Container>
        <NavBreadCrumbs />
        <SearchPanel />
      </Container>
    </>
  );
};

Route.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Route;
