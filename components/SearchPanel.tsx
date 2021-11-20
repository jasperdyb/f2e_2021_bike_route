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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import SearchPanelTypeList from "components/SearchPanelTypeList";
import SearchSelect from "components/SearchSelect";
import MainSwitch from "components/MainSwitch";

import { RegionOptions, CityOptions } from "types/sceneSpots";
import { useSceneSpotContext } from "context/sceneSpot";
import { SceneTypeOptions } from "types/sceneSpots";

const ThemedStack = muiStyled(Stack)(
  ({ theme }) => ` border-left: 3px solid ${theme.palette.primary.main};
 
`
);

const TitleStack = styled(ThemedStack)`
  padding-left: 16px;
`;

const SwitchStack = styled(Stack)`
  padding-left: 16px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

interface SearchFormType {
  search: string;
  address: string;
  autoPositionOn: boolean;
}

const SearchPanelVertical: React.FC = () => {
  const { region, city, type, setRegion, setCity, setType } =
    useSceneSpotContext();
  console.log("===  SearchPanelVertical useSceneSpotContext ===", {
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
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Stack spacing={"46px"}>
              <TitleStack spacing={"8px"}>
                <Typography typography={"h1"} color={"primary"}>
                  探索路線
                </Typography>
                <Typography>找到離您最近的自行車車道</Typography>
              </TitleStack>
              <SwitchStack
                direction={"row"}
                spacing="48px"
                alignItems={"center"}
              >
                <Typography>開啟自動定位</Typography>
                <MainSwitch></MainSwitch>
              </SwitchStack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack>
              <Typography>Title</Typography>

              <Typography>Switch</Typography>
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
      </CardContent>
    </Card>
  );
};

export default SearchPanelVertical;
