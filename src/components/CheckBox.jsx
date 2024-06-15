import React, { useState } from "react";
import {
  Container,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          pt: 4,
        }}
      >
        <FormGroup
          sx={{
            alignItems: "left",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={checked.item1} onChange={handleChange} />
            }
            label="The above terms and conditions have been read, understood, agreed and
            accepted by the parent & ASB."
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.3rem" },
              },
            }}
          />
        </FormGroup>
      </Box>
    </Container>
  );
};

export default CheckBox;
