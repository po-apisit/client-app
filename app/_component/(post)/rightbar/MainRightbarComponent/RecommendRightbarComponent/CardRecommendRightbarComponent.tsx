import {
  Card,
  Divider,
} from "@mui/material";
import React from "react";

import CardActionRecommendRightbarComponent from "./CardActionRecommendRightbarComponent";
import CardContentRecommendRightbarComponent from "./CardContentRecommendRightbarComponent";
import { ICardRecommend } from "@/app/(interface)/ICardrecommend";

type Props = {
  card: ICardRecommend
};

export default function CardRecommendRightbarComponent({card}: Props) {
  return (
    <Card sx={{ margin: 1 }}>
      <CardContentRecommendRightbarComponent card={card} />
        <Divider />
      <CardActionRecommendRightbarComponent />
    </Card>
  );
}
