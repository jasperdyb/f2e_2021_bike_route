import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Image from "next/image";
import { gsap } from "gsap";

import { useTheme } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import RoomIcon from "@mui/icons-material/Room";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Tooltip from "@mui/material/Tooltip";

import { SceneSpotDataType } from "types/sceneSpots";

import ImageWithFallback from "components/ImageWithFallback";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export const InfoCardContainer = styled("div")`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const SlideCardBackgroundImage = styled(ImageWithFallback)`
  z-index: 10;
`;

const InfoCardActionArea = styled(CardActionArea)`
  height: 100%;
  padding: 18px;
  z-index: 20;
`;

const InfoContainer = styled(Stack)`
  padding: 0 72px;
`;

const InfoDate = styled(Typography)`
  margin-bottom: 24px;
`;
const InfoTitle = styled(Typography)`
  margin-bottom: 46px;
`;

const ArrowRightAltIconLight = styled(ArrowRightAltIcon)`
  color: #eeeeee;
`;
ArrowRightAltIcon;

interface Props {
  backgroundImage?: string;
}

const InfoCard: React.FC<Props> = ({ backgroundImage, children }) => {
  const theme = useTheme();
  const imageRef = useRef();

  return (
    <InfoCardContainer>
      <BackgroundImageContainer ref={imageRef}>
        <SlideCardBackgroundImage
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={String("XXX")}
        />
      </BackgroundImageContainer>

      <InfoCardActionArea
        onClick={() => console.log("CLLLLLLLick")}
        onMouseEnter={() => {
          gsap.to(imageRef.current, { scale: 1.2 });
        }}
        onMouseLeave={() => {
          gsap.to(imageRef.current, { scale: 1 });
        }}
      >
        <InfoContainer textAlign={"center"}>
          <InfoDate color="common.white">2021/09/22</InfoDate>
          <InfoTitle typography={"h1"} color="common.white">
            16條自行車多元路線遊程推廣及販售
          </InfoTitle>
          <Typography color="common.white">+ Read more</Typography>
        </InfoContainer>
      </InfoCardActionArea>
    </InfoCardContainer>
  );
};
export default InfoCard;
