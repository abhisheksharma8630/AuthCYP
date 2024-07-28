import { Card, TextField } from "@mui/material"
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

export const Cardx = ({title,date,avatar}:{title:string,date:string,avatar:string})=>{
  return (
    <>
    <Card sx={{maxWidth:250,p:2}}>
        <Typography>{title}</Typography>
        <Typography className="text-gray-600 text-sm my-1">{date}</Typography>
        <Avatar src={avatar} alt={title}/>
    </Card>
    </>
  )
}

export const EventComponent = ()=>{
  return (<>
    <Box sx={{px:22,py:10,bgcolor:"black", color:"white"}}>
      <Stack
        justifyContent={"space-evenly"}
        direction="column"
        sx={{ height: 500, px: 10 }}
      >
      <Typography className="text-5xl font-black">Events</Typography>
      <h1 className="font-light text-xl w-2/3">Our team members speak at a variety of conferences, meetups, and other events across the world.</h1>
        <Stack direction={"row"} justifyContent={"space-around"} sx={{mb:5}}>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
          <Cardx title="Bringing the power of AI into your editor with Github Copilot" date="12/12/2022" avatar="https://github.com/wattenberger.png"/>
        </Stack>
      </Stack>
    </Box>
  </>)
}

export const TeamComponent = () => {
  return (
    <>
    <Stack justifyContent={"space-evenly"} direction={"row"}>
      <Typography>Projects</Typography>
      <Typography>Team</Typography>
      <Typography>Events</Typography>
      <Typography>Speakers</Typography>
    </Stack>
    <Box sx={{px:22,py:5}}>
      <Stack
        justifyContent={"space-evenly"}
        direction="column"
        sx={{ height: 500, px: 10 }}
      >
      <Typography className="text-5xl font-black">Team</Typography>
      <h1 className="font-light text-xl">Our team spans time zones, languages, and fields of expertise.</h1>
        <Stack direction={"row"} justifyContent={"space-around"} sx={{mb:5}}>
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
