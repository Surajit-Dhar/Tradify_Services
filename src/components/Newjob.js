import React from "react";
import {Box, Grid, Dialog, FilledInput, Select, MenuItem, DialogTitle, DialogContent, DialogActions, Typography} from "@mui/material";
import "../App.css"


export default props => {
    const skills =[
        "javascript",
        "React Js",
        "Angular js",
        "Node js",
        "TypeScript",
        "FireBase",
        "SQL"

    ]
    return (
        <Dialog open={true} fullWidth>
            <DialogTitle>Post Job</DialogTitle>
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
                        {skills.map((el) => <Box key={el}>{el}</Box>)}
                    </Box>

                </Box>
            </DialogContent>
        </Dialog>
    )
}