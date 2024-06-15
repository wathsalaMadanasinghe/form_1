import React from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  TableFooter,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const createData = (
  areaCode,
  emirates,
  location,
  term1,
  term2,
  term3,
  total
) => {
  return { areaCode, emirates, location, term1, term2, term3, total };
};

const rows = [
  createData(
    1,
    "DUBAI",
    "Gardens, Discovery Gardens, Al Furjan, Al Wasel Gardenia",
    " ",
    " ",
    " ",
    " "
  ),
  createData(
    2,
    "DUBAI",
    "JLT, Marina, JBR, Springs, Barsha, Tecom, Greens, Meadows, Jebel Ali power plant, Jumeirah Village Park, JVT",
    " ",
    " ",
    " ",
    " "
  ),
  createData(
    3,
    "DUBAI",
    "Jumeirah village circle, Sports city, Motor city, DIP, Arabian Ranches -1, Green Community, IMPZ",
    " ",
    " ",
    " ",
    " "
  ),
  createData(
    4,
    "DUBAI",
    "Deira, Burdubai, Jumeirah-1, Ghusais, Satwa, I'ntl city, Sheikh Zayed Rd, Downtown, Al Khail Gate, Al Khail Heights, Dubai Hills, Al Quoz, Dubai Silicon Oasis, Sky Court, Q Point, Liwan, Mudon, Karama, Al wasel, Jaffiliya, Diyaffa, Dry docs, Um-Sequim, Remram, Damac Hills - 1",
    " ",
    " ",
    " ",
    " "
  ),
  createData(
    5,
    "SHARJAH",
    "Sharjah Al Nahda, Abu Shagara, Rolla, King Faizal St, Al Wahda St Subway – 1,2,3 ",
    " ",
    " ",
    " ",
    " "
  ),
];

const Table1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          textAlign: "center",
          pt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textTransform: "uppercase",
              color: "black",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.4rem ", xl: "1.8rem" },
              borderBottom: "2px solid",
              borderColor: "black",
              pb: 1,
            }}
          >
            TRANSPORT FEES FOR THE ACADEMIC YEAR{" "}
          </Typography>
          <TextField
            variant="standard"
            size="small"
            sx={{
              mx: 1,
              my: 1,

              width: "calc(20% - 2px)",
              "& input": {
                fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                textAlign: "center",
              },
            }}
          ></TextField>
        </Box>

        {isSmallScreen ? (
          <Grid container spacing={2}>
            {rows.map((row, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">
                      AreaCode: {row.areaCode}
                    </Typography>
                    <Typography variant="body1">
                      Emirates: {row.emirates}
                    </Typography>
                    <Typography variant="body1">
                      Location: {row.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    rowSpan={2}
                    colSpan={3}
                    align="center"
                    sx={{
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    DPS – JEBEL ALI
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    align="center"
                    sx={{
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    TERM FEES **
                  </TableCell>
                  <TableCell
                    rowSpan={3}
                    align="center"
                    sx={{
                      width: 50,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    TOTAL{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={3}
                    align="center"
                    sx={{
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    (AED)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      width: 50,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Area Code
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: 75,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Emirates{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: 300,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Location
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: 75,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Term 1
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: 75,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Term 2
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: 75,
                      border: "1px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Term 3
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.areaCode}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.emirates}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.location}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.term1}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.term2}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.term3}
                    </TableCell>
                    <TableCell
                      align="justify"
                      sx={{ border: "1px solid black" }}
                    >
                      {row.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell
                    colSpan={4}
                    sx={{
                      width: 500,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    PAYMENT DUE DATES FOR REGULAR STUDENTS{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    15th Mar{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    15th Aug{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    15th Nov{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={4}
                    sx={{
                      width: 500,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    LAST DATE OF PAYMENT{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    25th Mar{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    25th Aug{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    25th Nov{" "}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    colSpan={4}
                    sx={{
                      width: 500,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    PAYMENT DUE DATES FOR NEW ADMISSIONS
                  </TableCell>
                  <TableCell
                    colSpan={3}
                    sx={{
                      width: 75,
                      border: "2px solid black",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    IMMEDIATELY UPON ADMISSION{" "}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        )}

        <Typography
          mt={5}
          variant="body1"
          component="p"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.5rem" },
            fontStyle: "italic",
          }}
        >
          ** The above fees are for the current academic year and subject to
          change and the difference will be collected, once approved by the
          concerned authority.
        </Typography>
        <Typography
          mt={3}
          variant="body1"
          component="p"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.5rem" },
          }}
        >
          Note: Student will not be allowed to board the bus in case payment is
          not received before last date of payment (as mentioned above)
        </Typography>

        <Typography
          mt={3}
          variant="body1"
          component="p"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.5rem" },
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          VAT OR ANY OTHER TAXES IF APPLICABLE ON TRANSPORT FEE SHALL BE CHARGED
          ADDITIONALLY ON ABOVE AMOUNTS.
        </Typography>
      </Box>
    </Container>
  );
};

export default Table1;
