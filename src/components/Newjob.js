import React, {useState} from "react";
import {Box, Grid, Dialog, FilledInput, Select, MenuItem, DialogTitle, DialogContent, DialogActions, Typography, Button, CircularProgress} from "@mui/material";
import "../App.css";




export default props => {
    const [loading, setLoading] = useState(false);
    const [jobData, setJobdata] = useState({
      
      title: "",
      type: "Full-Time",
      companyName: "",
      companyUrl: "",
      location: "Office-mode",
      descripstion:"",
      link: "",
      skills: [],
      
    });
    const handleChange = (e) => {
        e.preventDefault();
        setJobdata(el => ({...el , [e.target.name]: e.target.value}));
    }
    const addRemoveSkill = skill => jobData.skills.includes(skill)?
    setJobdata( el => ({...el , skills: el.skills.filter((s) => s != skill)}))
    :
    setJobdata((elem) => ({...elem, skills: elem.skills.concat(skill)}));

    const handleSubmit = async () => {
        for(const field in jobData){
            if(typeof jobData[field] === "string" && !jobData[field]) return;
        }if(!jobData.skills.length) return ;
        setLoading(true);
        await props.postJob(jobData)
        setLoading(false);
    }
    const close = () => {
        setJobdata({
            title: "",
            type: "Full-Time",
            companyName: "",
            companyUrl: "",
            location: "Office-mode",
            descripstion:"",
            link: "",
            skills: [],
        })
        setLoading(false);
        props.closeJob();
    }
    
    const skills =[
        "javascript",
        "React Js",
        "Angular js",
        "Node js",
        "FireBase",
        "SQL"

    ]
   
    return (
        <Dialog open={props.open} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <img onClick={close} style={{cursor:"pointer"}} height="35px" width="35px" src="https://img.icons8.com/external-neu-royyan-wijaya/2x/external-cancel-neu-interface-neu-royyan-wijaya-3.png"/>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange} 
                        name="title"
                        value={jobData.title}
                        autoComplete="off" 
                        placeholder="Job title *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select 
                    onChange={handleChange} 
                    name="type"
                    value={jobData.type}
                    fullWidth className="main-3" disableUnderline variant="filled" pt={5} >
                        <MenuItem value="Part-Time">Part-Time</MenuItem>
                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                        <MenuItem value="Internship">Internship</MenuItem>
                    </Select>

                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange} 
                        name="companyName"
                        value={jobData.companyName}
                        autoComplete="off" placeholder="Company name *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange} 
                         name="companyUrl"
                         value={jobData.companyUrl}
                        autoComplete="off" 
                        placeholder="Company URL *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                    <Select 
                    onChange={handleChange} 
                    name="location"
                    value={jobData.location}
                    fullWidth className="main-3" disableUnderline variant="filled">
                        <MenuItem value="Work-from-home">Work-from-home</MenuItem>
                        <MenuItem value="Office-mode">Office-mode</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange} 
                        name="link"
                        value={jobData.link}
                        autoComplete="off" placeholder="Job link *" disableUnderline fullWidth/>

                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                        onChange={handleChange}
                        name="descripstion"
                        value={jobData.descripstion} 
                        autoComplete="off"
                        multiline
                        rows={3}
                        placeholder="Job description *" disableUnderline fullWidth/>

                    </Grid>

                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map((el) => <Box onClick={() => addRemoveSkill(el)}  className="skill-2" ml={1.5} key={el}>{el}</Box>)}
                    </Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography color="red" variant="caption" ml={2}>* Required field</Typography>
                    <Button onClick={handleSubmit}
                    disabled={loading}
                     disableElevation variant="primary" style={{backgroundColor:"#3498db", color:"white",marginRight:"13px"}} >
                        {
                            loading ? <CircularProgress size={22}/>:
                            "Add Job"

                        }</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}