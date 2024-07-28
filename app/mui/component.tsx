import { TextField } from "@mui/material"
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Github } from "lucide-react";
export const FormX = ()=>{
    return(<>
             <TextField variant="outlined" label="Outlined" className="w-full"/>
        </>)
}

export const User = ({src,iconText}:{src:string,iconText:string})=>{
    return (
        <Stack justifyItems={"center"} alignItems={"center"}>
          <Avatar
            alt="Remy Sharp"
            src={src}
            sx={{ width: 110, height: 110 }}
          />
          <Typography variant="h6" className="font-bold">Alber Ziegler</Typography>
          <Typography className="">Principal ML Engineer</Typography>
          <Typography className="flex items-center gap-1 text-gray-700"><Github size={15}/> {iconText}</Typography>
        </Stack>
      );
}