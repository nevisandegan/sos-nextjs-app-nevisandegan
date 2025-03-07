"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import theme from "@/theme/theme";
import articlesData from "@/data/articles-data";
import Card from "../card/Card";
import CustomButton from "../button/CustomButton";

const Articles = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  const [showAll, setShowAll] = useState(!isSmallScreen);
  const visibleArticles =
    isSmallScreen && !showAll ? articlesData.slice(0, 3) : articlesData;

  return (
    <>
      {visibleArticles.map((item, index) => (
        <Card key={item.id || index} {...item} />
      ))}
      {isSmallScreen && (
        <CustomButton
          onClick={() => setShowAll((prev) => !prev)}
          sx={{
            marginTop: 1,
            marginBottom: 4,
            alignSelf: "center",
          }}
        >
          {showAll ? "نمایش کمتر" : "نمایش بیشتر"}
        </CustomButton>
      )}
    </>
  );
};

export default Articles;
