import React from "react";
import {Box, Grid, Dialog, FilledInput, Select, MenuItem, DialogTitle, DialogContent, DialogActions, Typography, Button} from "@mui/material";
import "../App.css";




export default props => {
    const skills =[
        "javascript",
        "React Js",
        "Angular js",
        "Node js",
        "FireBase",
        "SQL"

    ]
    return (
        <Dialog open={false} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <img height="35px" width="35px" src="https://img.icons8.com/external-neu-royyan-wijaya/2x/external-cancel-neu-interface-neu-royyan-wijaya-3.png"/>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job title *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select fullWidth className="main-3" disableUnderline variant="filled" pt={5} defaultValue="Full-Time">
                        <MenuItem value="Part-Time">Part-Time</MenuItem>
                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                        <MenuItem value="Internship">Internship</MenuItem>
                    </Select>

                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company name *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company URL *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select fullWidth className="main-3" disableUnderline variant="filled" defaultValue="Office-mode">
                        <MenuItem value="Work-from-home">Work-from-home</MenuItem>
                        <MenuItem value="Office-mode">Office-mode</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job link *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput 
                        multiline
                        rows={3}
                        placeholder="Job description *" disableUnderline fullWidth/>

                    </Grid>

                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map((el) => <Box className="skill-2" ml={1.5} key={el}>{el}</Box>)}
                    </Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography color="red" variant="caption" ml={2}>* Required field</Typography>
                    <Button disableElevation variant="primary" style={{backgroundColor:"#3498db", color:"white",marginRight:"13px"}} >Add Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}