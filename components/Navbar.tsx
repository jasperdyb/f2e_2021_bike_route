import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { PropTypes } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

import styled from "styled-components";
import logoYellow from "@img/logo_yellow.png";
import { styled as muiStyled } from "@mui/material/styles";

const ThemeColorAppBar = muiStyled(AppBar)(
  ({ theme }) => `
  background-color:${theme.palette.common.white}
  color:${theme.palette.common.black}
`
);

const CustomAppBar = styled(ThemeColorAppBar)`
  box-shadow: none;
  border-radius: 50px 50px 0px 0px;
`;

const TitleLinkStack = styled(Stack)`
  margin: 19px 0;
  padding: 0 128px;
  cursor: pointer;
`;

const Slogan = muiStyled(Typography)(
  ({ theme }) => `
  cursor: pointer;
  color:${theme.palette.common.black}
`
);

const NavButton = styled(Button)`
  flex-grow: 1;
`;

// const Logo = styled(Image)`
//   fill: #000 !important;
// `;

const menu = [
  { title: "最新消息", link: "/" },
  { title: "探索路線", link: "/" },
  { title: "尋照站點", link: "/search" },
  { title: "常見問題", link: "/" },
];

interface Props {
  color?: PropTypes.Color | "transparent";
}

const Navbar: React.FC<Props> = ({ color }) => {
  return (
    <CustomAppBar color={color} position="sticky">
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Link href={"/"} passHref>
          <TitleLinkStack textAlign={"center"}>
            <Image
              src={logoYellow}
              alt="Logo"
              width={"133px"}
              height={"49px"}
            />

            <Slogan typography={"subtitle1"}>Bike Fun！自行車旅遊網</Slogan>
          </TitleLinkStack>
        </Link>
        {menu.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <NavButton color="inherit">{item.title}</NavButton>
          </Link>
        ))}
      </Stack>
    </CustomAppBar>
  );
};

export default Navbar;
