import React from "react";
import { Container, Typography, Box } from "@mui/material";

const createData = (usage, fee) => {
  return { usage, fee };
};

const rows = [
  createData(
    "For period of Less than two weeks",
    "fees chargeable for one month"
  ),
  createData(
    "For period between two weeks and one month ",
    "fees chargeable for two months fees"
  ),
  createData(
    "For period exceeding one month ",
    "Fees chargeable for three months"
  ),
];

const Table2 = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          pt: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            textTransform: "uppercase",
            color: "black",
            fontWeight: "bold",
            textDecorationLine: "underline",
            fontStyle: "italic",
            mb: 2,
            fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.5rem" },
            pb: 1,
          }}
        >
          Fee charge policy for partial usage in case of new admission during
          midterm{" "}
        </Typography>
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ width: "50%", border: "2px solid black" }}>
                PERIOD OF BUS USAGE
              </th>
              <th
                style={{
                  width: "50%",
                  border: "2px solid black",
                  textAlign: "center",
                }}
              >
                FEES CHARGEABLE
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ width: "50%", border: "2px solid black" }}>
                  {row.usage}
                </td>
                <td
                  style={{
                    width: "50%",
                    border: "2px solid black",
                    textAlign: "center",
                  }}
                >
                  {row.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Container>
  );
};

export default Table2;
