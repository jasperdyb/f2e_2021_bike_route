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

const CustomAppBar = styled(AppBar)`
  padding: 33px 0;
  color: #fff;
`;

const FooterContentStack = styled(Stack)`
  margin: 0 auto;
`;

interface Props {
  color?: PropTypes.Color | "transparent";
}

const Footer: React.FC<Props> = ({ color, children }) => {
  return (
    <CustomAppBar color={color} position="static">
      <FooterContentStack>{children}</FooterContentStack>
    </CustomAppBar>
  );
};

export default Footer;
