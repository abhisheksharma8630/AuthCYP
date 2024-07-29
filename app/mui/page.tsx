"use client"
import React from "react";
import { Cardx, EventComponent, TeamComponent } from "./component";
import { Box, Stack, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
    h1: {
      fontFamily: '"Segoe UI"', // Customize the font for specific variants
    },
    body1: {
      fontFamily: '"Segoe UI"', // Customize the font for specific variants
    },
  },
});

export default function page() {
  return (
    <>
    <ThemeProvider theme={theme}>

      {/* <Stack justifyContent={"space-evenly"} direction={"row"}>
        <Typography>Projects</Typography>
        <Typography>Team</Typography>
        <Typography>Events</Typography>
        <Typography>Speakers</Typography>
      </Stack> */}
      <TeamComponent />
      <EventComponent/>
    </ThemeProvider>
    </>
  );
}
