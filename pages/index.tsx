import type { NextPage } from "next";
import type { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGetSceneSpots } from "services/sceneSpots";

import { styled as muiStyled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import MainInfoGrid from "components/MainInfoGrid";
import InfoCard, { InfoCardContainer } from "components/InfoCard";
import MainButton from "components/MainButton";
import Layout from "components/Layout";

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

const Home = () => {
  return (
    <>
      <DescriptionContainer>
        <DescriptionBody alignItems={"center"}>
          <BikeBoyImage src={bike_boy} alt="bike boy" />
          <Typography>
            便。告全禱我王劈有哇汐懇久給，分網呢瑄度不期清？資空有，沾對路韜空文近建回屠樞快錯樣沒卻遂人到騷不胡辨音次結，盪陳車，比反網己使。它栽！虛四是甚首；翩鏢社果捐貨話買啊？炭沾強三管期、同題己我己…、鵰章措秩合到公話慈在期不金議是曹搬大愛成以章陳要喜區跨，星退傑狗市蓉都利娟車龍人廿西美法沖憐為誰提嗜？裊張前廬狸中定，老靶五嘉慶卸太神戰經我重的，直看意澡每崎入因北用厚；要便，平是直找頒徊核艱至又放想工。
          </Typography>
        </DescriptionBody>
      </DescriptionContainer>
      <MainInfoGrid
        title="最新消息"
        link="/"
        mainInfoElement={
          <Stack direction={"row"} height={"100%"}>
            <InfoCardHalfContainer>
              <InfoCard src={index_news01} />
            </InfoCardHalfContainer>
            <InfoCardHalfContainer>
              <InfoCard src={index_news01} />
            </InfoCardHalfContainer>
          </Stack>
        }
        subInfoElement={
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "100%" }}
          >
            <MainButton title="更多最新消息" />
          </Stack>
        }
      />
      <MainInfoGrid
        title="探索路線"
        link="/"
        mainInfoElement={
          <Stack
            height={"100%"}
            paddingLeft={"53px"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            spacing={"32px"}
          >
            <Typography>
              自動定位、手動輸入都方便！ 快速找到離您最近的車道路線
            </Typography>
            <MainButton title="立刻搜尋" />
          </Stack>
        }
        subInfoElement={
          <InfoCardContainer>
            <Image
              src={index_route}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </InfoCardContainer>
        }
      />
      <MainInfoGrid
        title="尋找站點"
        link="/"
        mainInfoElement={
          <InfoCardContainer>
            <Image
              src={index_busStation}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </InfoCardContainer>
        }
        subInfoElement={
          <Stack height={"100%"} justifyContent={"stretch"}>
            <BorderStack
              height={"100%"}
              paddingLeft={"53px"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              spacing={"32px"}
            >
              <Typography>即時站點地圖</Typography>
              <MainButton title="立刻查看" />
            </BorderStack>
            <BorderStack
              height={"100%"}
              paddingLeft={"53px"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              spacing={"32px"}
            >
              <Typography>服務中心資訊</Typography>
              <MainButton title="立刻查看" />
            </BorderStack>
          </Stack>
        }
      />
      <FaqStack alignItems={"center"} justifyContent={"center"}>
        <FaqStackTitle typography={"h2"} color={"primary"}>
          常見問題
        </FaqStackTitle>
        <FaqStackList spacing={"30px"} textAlign={"center"}>
          <Typography>憫感忿加它棺再？琵言襟嗎賺叫要中吧？</Typography>
          <Typography>
            憫感忿加它棺再？琵言襟嗎賺叫要中吧？要萍浮現以蹤功應版有了
          </Typography>
          <Typography>憫感忿加它棺再？琵言襟嗎賺叫要中吧？</Typography>
        </FaqStackList>
        <MainButton title="更多常見問題" />
      </FaqStack>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
