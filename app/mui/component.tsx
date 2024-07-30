import {
  Card,
  CardMedia,
  Grid,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Check, CircleCheck, Github } from "lucide-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";

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
              color: "green",
            }}
          >
            <CheckCircleIcon fontSize="medium" />
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  itemName: string,
  quantity: number,
  unit: string,
  price: number,
  gst: number,
  amount: number
) {
  return { itemName, quantity, unit, price, gst, amount };
}

const rows = [
  createData(
    "10GB Web Space, 05Gbps Bandwidth, MySQL Database, SSL Annual Charge,Subdomains for All Courses",
    1,
    "Nos",
    17000,
    3060,
    20060
  ),
];

export const InvoiceComponent = () => {
  return (
    <>
      <Box
        sx={{
          width: "793.7px",
          height: "1122.5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "35%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
          }}
        >
          <Grid sx={{ height: "60%", width: "30%" }}>
            <Stack direction="row" alignItems={"center"} spacing={0.5}>
              <CardMedia
                component="img"
                alt="Company Logo"
                sx={{ height: 70, width: 70 }}
                src="https://brand.udyogx.in/wp-content/uploads/2022/12/image-1-150x150.png"
              />
              <Typography sx={{ fontWeight: 600 }}>
                UdyogX Technologies Private Limited
              </Typography>
            </Stack>
            <Stack mt={2}>
              <Typography
                variant="h3"
                fontWeight={700}
                textTransform={"uppercase"}
              >
                Invoice
              </Typography>
              <Typography>UDYOGX/2023-24/2</Typography>
            </Stack>
          </Grid>
          <Grid
            sx={{
              height: "60%",
              width: "30%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography fontWeight={600}>Date Information</Typography>
              <Typography fontSize={"small"}>10/11/2024</Typography>
            </Box>
            <Box>
              <Typography fontWeight={600}>Invoice Number</Typography>
              <Typography fontSize={"small"}>UDYOGX/2023-24/2</Typography>
            </Box>
            <Box>
              <Typography fontWeight={600} textTransform={"uppercase"}>
                Invoice To
              </Typography>
              <Typography fontSize={"small"}>
                Rajkiya Engineering College, Kannauj Aher, Tirwa, Kannauj, Uttar
                Pradesh
              </Typography>
            </Box>
            <Typography>Total Due: $500.0</Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            borderRadius: "1rem 1rem 0 0",
            top: "-60px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item Name</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Unit</StyledTableCell>
                  <StyledTableCell align="right">Price/Unit</StyledTableCell>
                  <StyledTableCell align="right">GST</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <StyledTableRow key={row.itemName}>
                    <StyledTableCell component="th" scope="row">
                      {idx + 1 + ". " + row.itemName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.unit}</StyledTableCell>
                    <StyledTableCell align="right">
                      Rs. {row.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Rs. {row.gst}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Rs. {row.amount}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            height: "35%",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            borderRadius: "0 0 1rem 1rem",
          }}
        >
          <Grid
            sx={{
              height: "80%",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Thank you for your business
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <Typography
                  fontSize={"small"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <AddIcCallIcon fontSize="small" /> +91 8979744113
                </Typography>
                <Typography
                  fontSize={"small"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <EmailIcon fontSize="small" /> udyogx@gmail.com
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Payment Method
              </Typography>
              <Grid container justifyContent={"space-between"}>
                <Typography>Bank Account</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  922020051711518
                </Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Bank Full Name</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  AXIS BANK, MATHURA
                </Typography>
              </Grid>
              <Grid container justifyContent={"space-between"}>
                <Typography>Bank Code</Typography>
                <Typography sx={{ fontWeight: 600 }}>UTIB0000359</Typography>
              </Grid>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Terms and Conditions
              </Typography>
              <Typography>
                Balance Due Net 15 Days.<br/> Please pay by Cheque or Internet
                Banking.
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              height: "80%",
              width: "45%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={3}
            >
              <Typography fontWeight={600} width={100}>
                Subtotal
              </Typography>
              :<Typography width={100}>Rs. 17000</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={3}
            >
              <Typography fontWeight={600} width={100}>
                Tax
              </Typography>
              :<Typography width={100}>Rs. 3060</Typography>
            </Stack>
            <Stack
              direction={"row"}
              sx={{
                background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
                borderRadius: "0.5rem",
                px: 3,
              }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6" fontWeight={600} width={100}>
                Total
              </Typography>
              :<Typography width={100}>Rs. 20060</Typography>
            </Stack>
            <Typography fontWeight={700} align="center" mt={10}>
              Authorised Signatory
            </Typography>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
