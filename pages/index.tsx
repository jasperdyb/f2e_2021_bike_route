import type { NextPage } from "next";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
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
import bike_boy from "@img/illustration_bikeboy.png";
import Logo from "@svg/Logo";
import { Typography } from "@mui/material";

const DescriptionContainer = styled("div")`
  background-color: white;
`;
const DescriptionBody = styled("div")`
  max-width: 860px;
  margin: 0 auto;
  padding: 22px 0 69px 0;
`;

const BikeBoyImage = styled(Image)`
  transform: matrix(-0.95, 0.31, 0.31, 0.95, 0, 0);
`;

const InfoGridContainer = styled(Grid)`
  background-color: white;
`;

const ThemedGrid = muiStyled(Grid)(
  ({ theme }) => `
  border-color:${theme.palette.divider}; 
`
);

const InfoTitleGrid = styled(ThemedGrid)`
  max-width: 252px;
  flex-grow: 0.63;
  padding: 219px 0;
  text-align: center;
  border-width: 1px;
  border-style: solid;
`;
const InfoMainGrid = styled(ThemedGrid)`
  flex-grow: 2;
  border-width: 1px;
  border-style: solid;
`;
const InfoSubGrid = styled(ThemedGrid)`
  flex-grow: 1;
  border-width: 1px;
  border-style: solid;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TaiwanTravel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background image={indexBackground}>
        <Navbar color="info" />
        <DescriptionContainer>
          <DescriptionBody>
            <BikeBoyImage src={bike_boy} alt="bike boy" />
            <Typography>
              便。告全禱我王劈有哇汐懇久給，分網呢瑄度不期清？資空有，沾對路韜空文近建回屠樞快錯樣沒卻遂人到騷不胡辨音次結，盪陳車，比反網己使。它栽！虛四是甚首；翩鏢社果捐貨話買啊？炭沾強三管期、同題己我己…、鵰章措秩合到公話慈在期不金議是曹搬大愛成以章陳要喜區跨，星退傑狗市蓉都利娟車龍人廿西美法沖憐為誰提嗜？裊張前廬狸中定，老靶五嘉慶卸太神戰經我重的，直看意澡每崎入因北用厚；要便，平是直找頒徊核艱至又放想工。
            </Typography>
          </DescriptionBody>
        </DescriptionContainer>
        <InfoGridContainer container direction={"row"}>
          <InfoTitleGrid item>
            <Typography typography={"h1"} color={"primary"}>
              最新消息
            </Typography>
          </InfoTitleGrid>
          <InfoMainGrid item></InfoMainGrid>
          <InfoSubGrid item></InfoSubGrid>
        </InfoGridContainer>

        <InfoGridContainer container direction={"row"}>
          <InfoTitleGrid item>
            <Typography typography={"h1"} color={"primary"}>
              探索路線
            </Typography>
          </InfoTitleGrid>
          <InfoMainGrid item></InfoMainGrid>
          <InfoSubGrid item></InfoSubGrid>
        </InfoGridContainer>

        <InfoGridContainer container direction={"row"}>
          <InfoTitleGrid item>
            <Typography typography={"h1"} color={"primary"}>
              尋找站點
            </Typography>
          </InfoTitleGrid>
          <InfoMainGrid item></InfoMainGrid>
          <InfoSubGrid item></InfoSubGrid>
        </InfoGridContainer>
      </Background>
    </>
  );
};

export default Home;
