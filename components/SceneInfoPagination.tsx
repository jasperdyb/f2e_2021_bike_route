import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";

import Pagination from "@mui/material/Pagination";

const CustomPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: flex-end;
  }

  & .MuiPaginationItem-root {
    border-radius: 10px;
    border-color: #a5a5a5;
    color: #a5a5a5;
  }

  & .MuiPaginationItem-previousNext {
    border-color: #7baebe;
    color: #7baebe;
  }

  & .MuiPaginationItem-previousNext.Mui-disabled {
    border: none;
    color: #bcbcbc;
    background-color: #e6e6e6;
  }

  & .Mui-selected {
    background-color: #7baebe;
    color: #ffffff;
    border: none;
  }
`;

interface Props {
  page: number;
  dataLength: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const SceneInfoPagination: React.FC<Props> = ({
  page,
  dataLength,
  onChange,
}) => {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    setCount(Math.ceil(dataLength / process.env.NUMBER_PER_PAGE));
  }, [dataLength]);

  return (
    <CustomPagination
      size="large"
      page={page}
      count={count}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  );
};
export default SceneInfoPagination;
