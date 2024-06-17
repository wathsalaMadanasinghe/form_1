import React from "react";
import { Grid } from "@mui/material";
import Heading from "./components/Heading";
import Conditions from "./components/Conditions";

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
