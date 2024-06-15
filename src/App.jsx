import React from "react";
import { Grid, TextField } from "@mui/material";
import Heading from "./components/Heading";
import Conditions from "./components/Conditions";
import CheckBox from "./components/CheckBox";
import Last from "./components/Last";

function App() {
  return (
    <>
      <Grid>
        <Heading />
        <Conditions />
        <Last />
      </Grid>
    </>
  );
}

export default App;
