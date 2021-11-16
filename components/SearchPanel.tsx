import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, useWatch, Controller, SubmitHandler } from "react-hook-form";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";

import MenuItem from "@mui/material/MenuItem";

import SearchSelect from "components/SearchSelect";
import { RegionOptions, CityOptions } from "types/sceneSpots";
import { useSceneSpotContext } from "context/sceneSpot";

const SearchPanelCard = styled(Card)`
  padding: 30px 18px;
`;

const SearchPanelSelect = styled(Select)`
  min-width: 270px;
  height: 50px;
  border-radius: 10px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

interface sceneSearchFormType {
  region: number;
  city: number;
}

const SearchPanel: React.FC = () => {
  const router = useRouter();
  const { region, city, setRegion, setCity, setType } = useSceneSpotContext();
  console.log("===  SearchPanel useSceneSpotContext ===", {
    region,
    city,
  });

  const { handleSubmit, watch, setValue, control } =
    useForm<sceneSearchFormType>({
      defaultValues: {
        region,
        city,
      },
    });
  const [citySelections, setCitySelections] = useState<
    Array<{
      title: string;
      value: number;
    }>
  >([]);

  const onSubmit: SubmitHandler<sceneSearchFormType> = (data) => {
    setRegion(data.region);
    setCity(data.city);
    setType(null);

    router.push("search");
  };
  const formRegion = watch("region", RegionOptions[0].value);

  useEffect(() => {
    const options = CityOptions.filter((city) => {
      return city.region === formRegion;
    });
    setCitySelections(options);

    if (options && options.length) {
      setValue("city", options[0].value);
    }
  }, [formRegion]);

  return (
    <SearchPanelCard raised>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={"32px"}
      >
        <Grid item>
          <Grid item container spacing={"18px"}>
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
          </Grid>
        </Grid>
        <Grid item>
          <SearchButton
            disableElevation
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Search
          </SearchButton>
        </Grid>
      </Grid>
    </SearchPanelCard>
  );
};

export default SearchPanel;
