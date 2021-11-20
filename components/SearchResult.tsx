import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { useForm, useWatch, Controller, SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import SortSelect from "components/SortSelect";
import CyclingRouteInfoCard from "components/CyclingRouteInfoCard";
import SearchPagination from "components/SearchPagination";

import { useSceneSpotContext } from "context/sceneSpot";

import { useGetCyclingRouteIndex } from "services/cyclingRoute";
import { CyclingIndexDataType } from "types/cyclingRoute";

const SearchContainer = styled(CardContent)`
  padding: 24px 48px 32px 24px;
  &:last-child {
    padding-bottom: 24px;
  }
`;

const ThemedStack = muiStyled(Stack)(
  ({ theme }) => ` border-left: 3px solid ${theme.palette.primary.main};
 
`
);

const TitleStack = styled(ThemedStack)`
  padding-left: 16px;
`;

const PaginationContainer = styled.div`
  margin-top: 64px;
`;

interface SearchFormType {
  search: string;
  address: string;
  autoPositionOn: boolean;
}

const SearchResult: React.FC = () => {
  const { cyclingRoutes } = useGetCyclingRouteIndex();
  const [pageData, setPageData] = useState<Array<CyclingIndexDataType>>([]);
  const [page, setPage] = useState(1);
  const { region, city, type, setRegion, setCity, setType } =
    useSceneSpotContext();
  console.log("===  SearchResult useSceneSpotContext ===", {
    region,
    city,
  });

  useEffect(() => {
    if (cyclingRoutes)
      setPageData(
        cyclingRoutes.slice(
          process.env.NUMBER_PER_PAGE * (page - 1),
          process.env.NUMBER_PER_PAGE * page
        )
      );
  }, [page, cyclingRoutes]);

  return (
    <>
      <Card raised>
        <SearchContainer>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginBottom={"32px"}
          >
            <TitleStack spacing={"8px"}>
              <Typography typography={"h1"} color={"primary"}>
                搜尋結果
              </Typography>
              <Typography>找到離您最近的自行車車道</Typography>
            </TitleStack>
            <SortSelect />
          </Stack>

          <Grid container spacing={"28px"}>
            {cyclingRoutes && cyclingRoutes.length === 0 ? (
              <Typography>很抱歉，沒有找到相關的路線。</Typography>
            ) : (
              pageData.map((cyclingRouteData, index) => (
                <Grid key={index} item xs={4}>
                  <CyclingRouteInfoCard cyclingRouteData={cyclingRouteData} />
                </Grid>
              ))
            )}
          </Grid>
        </SearchContainer>
      </Card>
      <PaginationContainer>
        <SearchPagination
          page={page}
          dataLength={cyclingRoutes.length}
          onChange={(_, page) => {}}
        />
      </PaginationContainer>
    </>
  );
};

export default SearchResult;
