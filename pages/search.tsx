import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { useGetSceneSpots, useGetTopSceneSpots } from "services/sceneSpots";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Navbar from "components/Navbar";
import Carousel from "components/Carousel";
import SearchAutoComplete from "components/SearchAutoComplete";
import SortSelect from "components/SortSelect";
import SearchPanelVertical from "components/SearchPanelVertical";
import SceneInfoCard from "components/SceneInfoCard";
import SceneInfoPagination from "components/SceneInfoPagination";
import NavBreadCrumbs from "components/NavBreadCrumbs";
import Footer from "components/Footer";

import { SceneSpotDataType } from "types/sceneSpots";
import { useSceneSpotContext } from "context/sceneSpot";
import { CityOptions } from "types/sceneSpots";

const NavBreadCrumbContainer = styled("div")`
  margin-top: 18px;
  margin-bottom: 30px;
`;

const SceneSpotsTitle = styled(Typography)`
  margin-bottom: 18px;
`;

const SceneSpotsCarouselContainer = styled("div")`
  margin-bottom: 50px;
`;

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>TaiwanTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="secondary" />

      <Footer color={"secondary"}>
        <Typography>
          TaiwanTravel © 2021 Designer Vum. Engineer Jasper Chen. All rights
          reserved.
        </Typography>
      </Footer>
    </>
  );
};

export default Search;
