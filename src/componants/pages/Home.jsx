import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import '../../App.css'

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Box>
            <Typography variant="h4" className="head">Welcome to expresspbclub</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
