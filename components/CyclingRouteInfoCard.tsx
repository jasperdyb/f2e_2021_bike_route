import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Image from "next/image";

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

import banner01 from "public/img//banner01.jpg";

import { CyclingIndexDataType } from "types/cyclingRoute";

import ImageWithFallback from "components/ImageWithFallback";

const SceneTypeChip = styled(Chip)`
  color: #fff;
`;

const Description = styled("div")`
  height: 100px;
`;

const OpenTimeContainer = styled("div")`
  max-width: 150px;
  text-overflow: ellipsis;
`;

interface Props {
  cyclingRouteData: CyclingIndexDataType;
}

const CyclingRouteInfoCard: React.FC<Props> = ({ cyclingRouteData }) => {
  const theme = useTheme();

  return (
    <>
      {cyclingRouteData && (
        <Card raised>
          <CardActionArea>
            <Grid direction="row" container>
              <Grid item xs={12}>
                <div
                  style={{
                    position: "relative",
                    height: "192px",
                    width: "100%",
                  }}
                >
                  <ImageWithFallback
                    src={null}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="search page banner"
                  />
                </div>
              </Grid>
              <Grid item xs={12} container padding={"16px"}>
                <Grid item xs={8} container rowSpacing={"12px"}>
                  <Grid item xs={12}>
                    {cyclingRouteData.RouteName}
                  </Grid>
                  <Grid item xs={12}>
                    {`${
                      cyclingRouteData.Direction
                        ? cyclingRouteData.Direction
                        : "單向"
                    } ${
                      Math.floor(cyclingRouteData.CyclingLength / 100) / 10
                    } 公里`}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  textAlign={"end"}
                  rowSpacing={"12px"}
                >
                  <Grid item xs={12}>
                    Distance
                  </Grid>
                  <Grid item xs={12}>
                    {`${cyclingRouteData.City} ${
                      cyclingRouteData.Town ? cyclingRouteData.Town : ""
                    }`}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};
export default CyclingRouteInfoCard;
