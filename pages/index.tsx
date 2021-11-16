import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useGetSceneSpots } from "services/sceneSpots";
import Background from "components/Background";
import Navbar from "components/Navbar";
import SearchPanel from "components/SearchPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import indexBackground from "@img/bg01.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TaiwanTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background src={indexBackground}></Background>
    </>
  );
};

export default Home;
