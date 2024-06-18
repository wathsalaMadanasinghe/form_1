import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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
            alignItems: "baseline",
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
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "2px solid",
              margin: "8px",
              padding: "none",
              width: "20%",
              fontSize: "absolute-size",
              textAlign: "center",
              outline: "none",
            }}
          />
        </Box>

        {isSmallScreen ? (
          <div>
            {rows.map((row, index) => (
              <div key={index} style={{ marginBottom: "16px" }}>
                <Typography variant="h6">AreaCode: {row.areaCode}</Typography>
                <Typography variant="body1">
                  Emirates: {row.emirates}
                </Typography>
                <Typography variant="body1">
                  Location: {row.location}
                </Typography>
              </div>
            ))}
          </div>
        ) : (
          <table style={{ minWidth: "650px", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  colSpan={3}
                  align="center"
                  style={{
                    width: "53%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  DPS – JEBEL ALI
                </th>
                <th
                  colSpan={3}
                  align="center"
                  style={{
                    width: "27%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  TERM FEES **
                </th>
                <th
                  rowSpan={3}
                  align="center"
                  style={{
                    width: "10%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  TOTAL{" "}
                </th>
              </tr>
              <tr>
                <th
                  colSpan={3}
                  align="center"
                  style={{
                    width: "27%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  (AED)
                </th>
              </tr>
              <tr>
                <th
                  align="center"
                  style={{
                    width: "3%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Area Code
                </th>
                <th
                  align="center"
                  style={{
                    width: "15%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Emirates{" "}
                </th>
                <th
                  align="center"
                  style={{
                    width: "45%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Location
                </th>
                <th
                  align="center"
                  style={{
                    width: "9%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Term 1
                </th>
                <th
                  align="center"
                  style={{
                    width: "9%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Term 2
                </th>
                <th
                  align="center"
                  style={{
                    width: "9%",
                    border: "1px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  Term 3
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td style={{ width: "3%", border: "1px solid black" }}>
                    {row.areaCode}
                  </td>
                  <td
                    align="justify"
                    style={{ width: "15%", border: "1px solid black" }}
                  >
                    {row.emirates}
                  </td>
                  <td
                    align="justify"
                    style={{
                      padding: "10px",

                      width: "45%",
                      border: "1px solid black",
                    }}
                  >
                    {row.location}
                  </td>
                  <td
                    align="justify"
                    style={{ width: "9%", border: "1px solid black" }}
                  >
                    {row.term1}
                  </td>
                  <td
                    align="justify"
                    style={{ width: "9%", border: "1px solid black" }}
                  >
                    {row.term2}
                  </td>
                  <td
                    align="justify"
                    style={{ width: "9%", border: "1px solid black" }}
                  >
                    {row.term3}
                  </td>
                  <td
                    align="justify"
                    style={{ width: "10%", border: "1px solid black" }}
                  >
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    width: 425,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  PAYMENT DUE DATES FOR REGULAR STUDENTS{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  15th Mar{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  15th Aug{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  15th Nov{" "}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    width: 425,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  LAST DATE OF PAYMENT{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  25th Mar{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  25th Aug{" "}
                </td>
                <td
                  style={{
                    width: 75,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  25th Nov{" "}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={4}
                  style={{
                    width: 425,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  PAYMENT DUE DATES FOR NEW ADMISSIONS
                </td>
                <td
                  colSpan={3}
                  style={{
                    width: 225,
                    border: "2px solid black",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  IMMEDIATELY UPON ADMISSION{" "}
                </td>
              </tr>
            </tfoot>
          </table>
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
