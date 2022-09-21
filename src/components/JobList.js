import React from "react";
import {Box, Grid, Typography, Button} from "@mui/material";
import {differenceInMinutes} from "date-fns"
import "../App.css";



export default props => {
    return (
        <Box ml={23.5} p={1} style={{width:"895px"}} className="m1">
            <Grid container>
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography variant="subtitle2" className="t1" mt={2}>{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                    <Grid item style={{display:"flex"}} alignItems="center">
                    {props.skills.map((el) => (<Grid key={el} className="skill" ml={2} pb={3} item>{el}</Grid>))}

                    </Grid>
                    
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Box ml={3}>
                       <Typography style={{marginLeft:"40px", fontSize:"13px"}}>{Math.abs(differenceInMinutes(Date.now(), props.postedOn))} min ago || {props.type} || {props.location}</Typography>
                    </Box>
                    
                    <Box mt={2}>
                        <Button variant="primary" style={{backgroundColor:"#3498db", color:"white"}}>Quick View</Button>
                    </Box>
                    
                </Grid>               
            </Grid>
        </Box>
    )
}