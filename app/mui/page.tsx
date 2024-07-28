import React from "react";
import { Grid, Typography, Link, Stack, Box } from "@mui/material";
import {User} from "./component";

const TeamComponent = () => {
  return (
    <>
    <Box sx={{p:10}}>
      <h1 className="font-light text-xl">Our team spans time zones, languages, and fields of expertise.</h1>
      <Stack
        justifyContent={"space-evenly"}
        direction="column"
        sx={{ height: 500, p: 10 }}
      >
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <User src="https://github.com/xalili.png" />
          <User src="https://github.com/wattenberger.png" />
          <User src="https://github.com/colebemis.png" />
          <User src="https://github.com/davidslater.png" />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <User src="https://github.com/drifkin.png" />
          <User src="https://github.com/dsyme.png" />
          <User src="https://github.com/eaftan.png" />
          <User src="https://github.com/ikaliam.png" />
        </Stack>
      </Stack>
    </Box>
    </>
  );
};

export default TeamComponent;
