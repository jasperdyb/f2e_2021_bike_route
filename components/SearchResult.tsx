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

import { useSceneSpotContext } from "context/sceneSpot";

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

const TitleGrid = styled(Grid)`
  margin-right: 47px;
`;

const TitleStack = styled(ThemedStack)`
  padding-left: 16px;
`;

const SwitchStack = styled(Stack)``;

const SwitchLabel = styled(FormControlLabel)`
  margin-left: 16px;
  & .MuiFormControlLabel-label {
    margin-right: 48px;
  }
`;

const SearchInputLabel = styled(FormControlLabel)`
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0;
`;

const SearchInput = styled(TextField)`
  & .MuiOutlinedInput-input {
    width: 320px;
    padding: 12px;
  }
`;

const SearchButton = styled(Button)`
  min-width: 120px;
  height: 40px;
`;

interface SearchFormType {
  search: string;
  address: string;
  autoPositionOn: boolean;
}

const SearchResult: React.FC = () => {
  const { region, city, type, setRegion, setCity, setType } =
    useSceneSpotContext();
  console.log("===  SearchResult useSceneSpotContext ===", {
    region,
    city,
  });

  const { handleSubmit, watch, setValue, control } = useForm<SearchFormType>({
    defaultValues: {
      search: "",
      address: "",
      autoPositionOn: false,
    },
  });

  const autoPositionOn = watch("autoPositionOn", false);

  const onSubmit: SubmitHandler<SearchFormType> = (data) => {};

  return (
    <Card raised>
      <SearchContainer>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <TitleStack spacing={"8px"}>
            <Typography typography={"h1"} color={"primary"}>
              搜尋結果
            </Typography>
            <Typography>找到離您最近的自行車車道</Typography>
          </TitleStack>
          <SortSelect />
        </Stack>

        <Grid container></Grid>
      </SearchContainer>
    </Card>
  );
};

export default SearchResult;
