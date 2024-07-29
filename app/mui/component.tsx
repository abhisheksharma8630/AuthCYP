import { Card, Grid, TextField, useTheme } from "@mui/material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Github } from "lucide-react";
export const FormX = () => {
  return (
    <>
      <TextField variant="outlined" label="Outlined" className="w-full" />
    </>
  );
};

export const User = ({ src, iconText }: { src: string; iconText: string }) => {
  return (
    <Stack justifyItems={"center"} alignItems={"center"}>
      <Avatar alt="Remy Sharp" src={src} sx={{ width: 110, height: 110 }} />
      <Typography variant="h6" className="font-bold">
        Alber Ziegler
      </Typography>
      <Typography>Principal ML Engineer</Typography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: "light",
          color: "gray",
        }}
      >
        <Github size={15} /> {iconText}
      </Typography>
    </Stack>
  );
};

export const Cardx = ({
  title,
  date,
  avatar,
}: {
  title: string;
  date: string;
  avatar: string;
}) => {
  return (
    <>
      <Card
        sx={{
          p: 2,
          transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.02)", cursor: "pointer" },
        }}
      >
        <Typography
          component="a"
          sx={{
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography className="text-gray-600 text-sm my-1">{date}</Typography>
        <Avatar src={avatar} alt={title} />
      </Card>
    </>
  );
};


export const TeamComponent = () => {
  const theme = useTheme();
  return (
    <>
    
      <Box sx={{ minHeight: "100lvh", px: {xs:2,sm:2,md:10,lg:22}, py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Team
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "light", color: "GrayText", mb: 5 }}
          >
            Our team spans time zones, languages, and fields of expertise.
          </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            // Centering content for large screens
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: 1200,
            },
            // Stacking elements on smaller screens
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/xalili.png" iconText="xalili" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/wattenberger.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/colebemis.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/davidslater.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/drifkin.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/dsyme.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/eaftan.png" iconText="xalili" />

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <User src="https://github.com/davidslater.png" iconText="xalili" />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export function EventComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(0deg, #180161, #000000)",
        color: "white",
        padding: theme.spacing(4),
        minHeight: "100vh", // Ensures full viewport height
        px: {xs:2,sm:2,md:10,lg:22}, py: 5 
      }}
    ><Typography variant="h3" sx={{ fontWeight: "bold" }}>
    Events
  </Typography>
  <Typography
    variant="h6"
    sx={{
      fontWeight: "light",
      color: "rgba(255, 255, 255, 0.8)",
      mb: 5,
      maxWidth: 500,
    }}
  >
    Our team members speak at a variety of conferences, meetups, and
    other events across the world.
  </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          // Centering content for large screens
          [theme.breakpoints.up("lg")]: {
            width: "100%",
            maxWidth: 1200,
          },
          // Stacking elements on smaller screens
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/drifkin.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/wattenberger.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/drifkin.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/drifkin.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/wattenberger.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Cardx
            title="Bringing the power of AI into your editor with Github Copilot"
            date="12/12/2022"
            avatar="https://github.com/drifkin.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
