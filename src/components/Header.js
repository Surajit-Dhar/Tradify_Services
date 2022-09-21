import React from "react";
import {Box, Grid, Typography, Button} from "@mui/material";


export default props => (
<Box py={5} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={11} style={{marginLeft:"50px"}}>
        <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Welcome To Job Protal</Typography>
        <Button onClick={props.openNewJob} variant="contained" style={{padding:"3px 15px"}}>Add Job</Button>

        </Box>
      </Grid>  

    </Grid>
</Box>
);
   
