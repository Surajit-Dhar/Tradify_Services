import React from "react";
import {Box, Grid, Typography, Button} from "@mui/material";
import "../App.css";

const skills = ["javascript", "React.js", "MongoDB"];

export default props => {
    return (
        <Box ml={23.5} p={1} style={{width:"895px"}} className="m1">
            <Grid container>
                <Grid item xs>
                    <Typography variant="subtitle1">Frontend Dev</Typography>
                    <Typography variant="subtitle2" className="t1" mt={2}>Google</Typography>
                </Grid>
                <Grid item container xs>
                    <Grid item style={{display:"flex"}} alignItems="center">
                    {skills.map((el) => (<Grid key={el} className="skill" ml={2} pb={3} item>{el}</Grid>))}

                    </Grid>
                    
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Box ml={3}>
                       <Typography variant="subtitle2" style={{marginLeft:"40px"}}>79 min ago || Full Time || Remote</Typography>
                    </Box>
                    
                    <Box mt={2}>
                        <Button variant="primary" style={{backgroundColor:"#3498db", color:"white"}}>Quick View</Button>
                    </Box>
                    
                </Grid>               
            </Grid>
        </Box>
    )
}