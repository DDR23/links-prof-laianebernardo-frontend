"use client";
import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  primaryColor: 'defaultColor',
  fontFamily: 'Alata, sans-serif',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  colors: {
    defaultColor: [
      "#fff4e1",
      "#ffe8cc",
      "#fed09b",
      "#fdb766",
      "#fca13a",
      "#fc931d",
      "#fc8c0c",
      "#e17800",
      "#c86a00",
      "#af5a00"
    ]
  }
});
