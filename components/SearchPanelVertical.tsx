import React, { useState, useEffect } from "react";

import styled from "styled-components";
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

import { RegionOptions, CityOptions } from "types/sceneSpots";
import { useSceneSpotContext } from "context/sceneSpot";
import { SceneTypeOptions } from "types/sceneSpots";

const FilterTypography = styled(Typography)`
  margin-bottom: 16px;
`;

const FilterGrid = styled(Grid)`
  margin-bottom: 16px;
`;

const FilterDivider = styled(Divider)`
  margin-bottom: 16px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

interface sceneSearchFormType {
  region: number;
  city: number;
  type: string | null;
}

const SearchPanelVertical: React.FC = () => {
  const [citySelections, setCitySelections] = useState<
    Array<{
      title: string;
      value: number;
    }>
  >([]);

  const { region, city, type, setRegion, setCity, setType } =
    useSceneSpotContext();
  console.log("===  SearchPanelVertical useSceneSpotContext ===", {
    region,
    city,
  });

  const { handleSubmit, watch, setValue, control } =
    useForm<sceneSearchFormType>({
      defaultValues: {
        region,
        city,
        type,
      },
    });

  const formRegion = watch("region", RegionOptions[0].value);

  const onSubmit: SubmitHandler<sceneSearchFormType> = (data) => {
    setRegion(data.region);
    setCity(data.city);
    setType(data.type);
  };

  useEffect(() => {
    const options = CityOptions.filter((city) => {
      return city.region === formRegion;
    });
    setCitySelections(options);

    if (options && options.length) {
      setValue("city", options[0].value);
    }
  }, [formRegion]);

  useEffect(() => {
    setRegion(10);
    setCity(10);
  }, []);

  return (
    <Card raised>
      <CardContent>
        <FilterTypography typography={"h2"}>篩選內容</FilterTypography>
        <FilterGrid container spacing={"18px"}>
          <Grid item xs={12}>
            <Typography typography={"h1"} color="info.main">
              地區/縣市
            </Typography>
          </Grid>
          <Grid item>
            <Controller
              name="region"
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <SearchSelect
                  selections={RegionOptions}
                  value={value}
                  onChange={(event: SelectChangeEvent<unknown>) => {
                    onChange(event.target.value);
                  }}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="city"
              control={control}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <SearchSelect
                  selections={citySelections}
                  value={value}
                  onChange={(event: SelectChangeEvent<unknown>) => {
                    onChange(event.target.value);
                  }}
                />
              )}
            />
          </Grid>
        </FilterGrid>
        <FilterDivider />
        <Typography typography={"h1"} color="info.main">
          類別
        </Typography>

        <Controller
          name="type"
          control={control}
          defaultValue={null}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <SearchPanelTypeList
              options={SceneTypeOptions}
              value={value}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>,
                value: string
              ) => {
                onChange(value);
              }}
            />
          )}
        />

        <Stack direction={"row"} justifyContent={"center"}>
          <SearchButton
            disableElevation
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Search
          </SearchButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SearchPanelVertical;
