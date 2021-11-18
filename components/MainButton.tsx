import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import { styled as muiStyled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const InfoGridContainer = styled(Stack)`
  background-color: white;
`;

const ThemedButton = muiStyled(Button)(
  ({ theme }) => `
  border-color:${theme.palette.secondary.main}; 
  color: ${theme.palette.common.black}; 
  background-color: ${theme.palette.primary.contrastText}; 

  & .MuiButton-endIcon{
    color: ${theme.palette.secondary.main}; 
  }

  &:hover {
    border-color:${theme.palette.secondary.main}; 
    background-color: ${theme.palette.secondary.main}; 
    color: ${theme.palette.common.white}; 
    .MuiButton-endIcon{
      color: ${theme.palette.common.white}; 
    }
  }

`
);

interface Props {
  title: string;
  link?: string;
}

const MainButton: React.FC<Props> = ({ title, link }) => {
  return (
    <ThemedButton variant="outlined" endIcon={<ArrowForwardIcon />}>
      {title}
    </ThemedButton>
  );
};

export default MainButton;
