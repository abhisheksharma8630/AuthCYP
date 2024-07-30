import { Card, Grid, TextField, useTheme } from "@mui/material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Check, CircleCheck, Github } from "lucide-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
      <Box
        sx={{
          minHeight: "100lvh",
          px: { xs: 2, sm: 2, md: 10, lg: 22 },
          py: 5,
        }}
      >
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
        px: { xs: 2, sm: 2, md: 10, lg: 22 },
        py: 5,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
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
        Our team members speak at a variety of conferences, meetups, and other
        events across the world.
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

export const PaymentComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          p: 2,
          bgcolor: "#e7eaf6",
          borderRadius: "1rem",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #fff",
            borderRadius: "2rem",
            alignItems: "center",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            p: 3,
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              height: 40,
              width: 40,
              backgroundColor: "#abf7b1",
              color:"green"
            }}
          >
            <CheckCircleIcon fontSize="medium"/>
          </Box>
          <Typography variant="h6">Payment Success!</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            IDR 1,000,000
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #fff",
            borderRadius: "2rem",
            alignItems: "center",
            p: 3,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            bgcolor: "white",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #fff",
              borderRadius: "2rem",
              alignItems: "center",
              pt: 3,
              px: 3,
              bgcolor: "white",
              gap: 1,
            }}
          >
            <Grid container justifyContent={"space-between"}>
              <Typography variant="h6">Payment Details</Typography>
              <Typography variant="h6">
                <KeyboardArrowUp />
              </Typography>
            </Grid>
            <Grid container justifyContent={"space-between"}>
              <Typography>Ref Number</Typography>
              <Typography sx={{ fontWeight: 600 }}>000085752257</Typography>
            </Grid>
            <Grid container justifyContent={"space-between"}>
              <Typography>Payment Status</Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", fontWeight: 600 }}
              >
                <CheckCircleIcon sx={{ color: "green", height: 20 }} />
                Success
              </Typography>
            </Grid>
            <Grid container justifyContent={"space-between"}>
              <Typography>Payment Time</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                30-7-2024, 09:12:12
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ borderTop: "1px dashed gray", pt: 2, mt: 1 }}
            >
              <Typography>Total Payment</Typography>
              <Typography sx={{ fontWeight: 700 }}>IDR 1,000,000</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            border: "2px solid #fff",
            borderRadius: "2rem",
            p: 3,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            bgcolor: "white",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                height: 50,
                width: 50,
                backgroundColor: "#e7eaf6",
              }}
            >
              <HelpOutlineIcon fontSize="large" />
            </Box>
            <Grid>
              <Typography sx={{ fontWeight: 700 }}>
                Trouble with your payment ?
              </Typography>
              <Typography>Contact our support team</Typography>
            </Grid>
            <KeyboardArrowRightIcon />
          </Grid>
        </Box>
      </Box>
    </>
  );
};
