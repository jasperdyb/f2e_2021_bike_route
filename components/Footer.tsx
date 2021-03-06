import * as React from "react";
import { PropTypes } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Container from "@mui/material/Container";

import styled from "styled-components";
import { styled as muiStyled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomAppBar = muiStyled(AppBar)(({ theme }) => ({
  padding: "33px 0",
  color: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const FooterContentStack = styled(Stack)`
  margin: 0 auto;
`;

interface Props {
  color?: PropTypes.Color | "transparent";
}

const Footer: React.FC<Props> = ({ color, children }) => {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <CustomAppBar color={color} position="static">
      <FooterContentStack>{children}</FooterContentStack>
    </CustomAppBar>
  );
};

export default Footer;
