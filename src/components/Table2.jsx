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
} from "@mui/material";

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

        <TableContainer component={Box}>
          <Table sx={{ minWidth: 650 }} aria-label="merged table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "2px solid black" }}>
                  PERIOD OF BUS USAGE{" "}
                </TableCell>
                <TableCell align="center" sx={{ border: "2px solid black" }}>
                  FEES CHARGEABLE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <TableCell sx={{ border: "2px solid black" }}>
                    {row.usage}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black" }}>
                    {row.fee}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Table2;
