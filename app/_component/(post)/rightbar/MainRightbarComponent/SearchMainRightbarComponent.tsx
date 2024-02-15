import React from "react";
import { Divider, MenuList, Stack, Typography } from "@mui/material";
import ProvinceSearchMainRightbarComponent from "./SearchMainRightbarComponent/ProvinceSearchMainRightbarComponent";
import CategorySearchMainRightbarComponent from "./SearchMainRightbarComponent/CategorySearchMainRightbarComponent";
import SearchRightbarComponent from "./SearchMainRightbarComponent/SearchRightbarComponent";

type Props = {};

export default function SearchMainRightbarComponent({}: Props) {
  return (
    <React.Fragment>
      <Stack>
        <Typography variant="h6">ทางเลือกการค้นหา</Typography>
        <MenuList dense>
          <SearchRightbarComponent />
          <ProvinceSearchMainRightbarComponent />
          <CategorySearchMainRightbarComponent />
        </MenuList>
      </Stack>
      <Divider />
    </React.Fragment>
  );
}
