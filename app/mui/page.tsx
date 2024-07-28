import React from "react";
import { Grid, Typography, Link, Stack, Box } from "@mui/material";
import {User} from "./component";

const TeamComponent = () => {
  return (
    <>
    <Box sx={{px:10}}>
      <Stack
        justifyContent={"space-evenly"}
        direction="column"
        sx={{ height: 500, px: 10 }}
      >
      <h1 className="font-light text-xl">Our team spans time zones, languages, and fields of expertise.</h1>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <User src="https://github.com/xalili.png" iconText="xalili"/>
          <User src="https://github.com/wattenberger.png" iconText="wattenberger"/>
          <User src="https://github.com/colebemis.png" iconText="colebemis" />
          <User src="https://github.com/davidslater.png" iconText="davidslater" />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <User src="https://github.com/drifkin.png" iconText="drifkin"/>
          <User src="https://github.com/dsyme.png" iconText="drifkin"/>
          <User src="https://github.com/eaftan.png" iconText="drifkin"/>
          <User src="https://github.com/ikaliam.png" iconText="drifkin" />
        </Stack>
      </Stack>
    </Box>
    </>
  );
};

export default TeamComponent;
