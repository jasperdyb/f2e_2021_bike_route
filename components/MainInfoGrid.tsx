import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import { styled as muiStyled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const InfoGridContainer = styled(Grid)`
  background-color: white;
`;

const ThemedGrid = muiStyled(Grid)(
  ({ theme }) => `
  border-color:${theme.palette.divider}; 
  color: ${theme.palette.common.black}; 
  background-color: ${theme.palette.primary.contrastText}; 
`
);

const ThemedInfoTitleGrid = muiStyled(ThemedGrid)(
  ({ theme }) => ` 
  color: ${theme.palette.primary.main}; 
  &:hover {
   background-color: ${theme.palette.primary.main}; 
   color: ${theme.palette.primary.contrastText}; 
  }
`
);

const InfoTitleGrid = styled(ThemedInfoTitleGrid)`
  max-width: 252px;
  /* flex-grow: 0.63; */
  padding: 219px 0;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
`;
const InfoMainGrid = styled(ThemedGrid)`
  /* flex-grow: 2; */
  border-width: 1px;
  border-style: solid;
`;
const InfoSubGrid = styled(ThemedGrid)`
  /* flex-grow: 1; */
  border-width: 1px;
  border-style: solid;
`;

interface Props {
  title: string;
  link?: string;
  mainInfoElement?: JSX.Element;
  subInfoElement?: JSX.Element;
}

const MainInfoGrid: React.FC<Props> = ({
  title,
  link,
  mainInfoElement,
  subInfoElement,
}) => {
  return (
    <InfoGridContainer container direction={"row"}>
      <Link href={link} passHref>
        <InfoTitleGrid item xs={2}>
          <Typography typography={"h1"}>{title}</Typography>
        </InfoTitleGrid>
      </Link>
      <InfoMainGrid item xs={7}>
        {mainInfoElement}
      </InfoMainGrid>
      <InfoSubGrid item xs={3}>
        {subInfoElement}
      </InfoSubGrid>
    </InfoGridContainer>
  );
};

export default MainInfoGrid;
