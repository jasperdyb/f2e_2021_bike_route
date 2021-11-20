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
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";

import MainSwitch from "components/MainSwitch";

import { useSceneSpotContext } from "context/sceneSpot";
import { getCurrentPosition } from "services/geolocation";

interface SearchFormType {
  search: string;
  address: string;
  autoPositionOn: boolean;
}

const SearchPanel: React.FC = () => {
  const { region, city, type, setRegion, setCity, setType } =
    useSceneSpotContext();
  console.log("===  SearchPanel useSceneSpotContext ===", {
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
        <Grid container justifyContent={"space-between"}>
          <TitleGrid>
            <Stack spacing={"46px"}>
              <TitleStack spacing={"8px"}>
                <Typography typography={"h1"} color={"primary"}>
                  探索路線
                </Typography>
                <Typography>找到離您最近的自行車車道</Typography>
              </TitleStack>
              <SwitchStack direction={"row"} alignItems={"center"}>
                <SwitchLabel
                  control={<MainSwitch />}
                  labelPlacement="start"
                  label="開啟自動定位"
                />
              </SwitchStack>
            </Stack>
          </TitleGrid>
          <Grid>
            <Stack height={"100%"} justifyContent={"space-between"}>
              <SearchInputLabel
                control={
                  <SearchInput placeholder="請輸入關鍵字" variant="outlined" />
                }
                labelPlacement="start"
                label="路線關鍵字"
              />
              <SearchInputLabel
                control={
                  <SearchInput placeholder="請輸入地址" variant="outlined" />
                }
                labelPlacement="start"
                label="手動輸入地址"
              />
            </Stack>
          </Grid>
          <Stack justifyContent={"flex-end"}>
            <SearchButton
              disableElevation
              variant="contained"
              color="secondary"
              onClick={handleSubmit(onSubmit)}
            >
              GO!
            </SearchButton>
          </Stack>
        </Grid>
      </SearchContainer>
    </Card>
  );
};

const SearchContainer = styled(CardContent)`
  padding: 24px 48px 32px 32px;
  &:last-child {
    padding-bottom: 32px;
  }
`;

const ThemedStack = muiStyled(Stack)(
  ({ theme }) => ` border-left: 3px solid ${theme.palette.primary.main};
 
`
);

const TitleGrid = styled(Grid)`
  padding-right: 47px;
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

  & .MuiFormControlLabel-label {
    margin-right: 64px;
  }
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

export default SearchPanel;
