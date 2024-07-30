"use client"
import React from "react";
import { Cardx, EventComponent, InvoiceComponent, PaymentComponent, TeamComponent } from "./component";
import { Box, Stack, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { GeistSans } from "geist/font/sans";

const theme = createTheme({
  typography:{
    fontFamily: GeistSans.style.fontFamily,
  }
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
      <PaymentComponent/>
      <InvoiceComponent/>
    </ThemeProvider>
    </>
  );
}
