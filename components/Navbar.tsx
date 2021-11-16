import * as React from "react";
import { PropTypes } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

// import styled from "styled-components";
import { styled } from "@mui/material/styles";

// const CustomAppBar = styled.div`
const CustomAppBar = styled(AppBar)`
  box-shadow: none;
  padding: 0 140px;
  color: #fff;
`;

const menu = [
  { title: "旅遊情報", link: "/" },
  { title: "景點查詢", link: "/search" },
  { title: "美食推薦", link: "/" },
  { title: "旅宿資訊", link: "/" },
  { title: "節慶活動", link: "/" },
];

interface Props {
  color?: PropTypes.Color | "transparent";
}

const Navbar: React.FC<Props> = ({ color }) => {
  return (
    <CustomAppBar color={color} position="sticky">
      <Toolbar>
        <Link href={"/"} passHref>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            TAIWAN TRAVEL
          </Typography>
        </Link>

        {menu.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <Button color="inherit">{item.title}</Button>
          </Link>
        ))}
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
