import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, CircularProgress, Grid, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import Header from './components/Header';
import Search from './components/Search';
import JobList from './components/JobList';
import Newjob from './components/Newjob';
//import Details from "./data";
import  {firestore,firebase} from './firebase/config';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [custom, setCustom] = useState(false);
  const [open, setOpen] = useState(false);

  const fetchjobs = async () => {
    setCustom(false)
    setLoading(true);
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').get();
    //console.log(req);
    const result = req.docs.map(job => ({...job.data(),  id: job.id, postedOn: Math.abs(job.data().postedOn.toDate()) }));
    //console.log(result);
    setData(result);
    setLoading(false);
  };

  const postJob = async jobData => {
      await firestore.collection('jobs').add({...jobData, postedOn: firebase.firestore.FieldValue.serverTimestamp() });
      fetchjobs()
  }
  const fetchJobCustom = async jobSearch => {
    setLoading(true);
    setCustom(true);
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').where("location", '==', jobSearch.location)
    .where("type", '==', jobSearch.type)
    .get();
    //console.log(req);
    const result = req.docs.map(job => ({...job.data(),  id: job.id, postedOn: Math.abs(job.data().postedOn.toDate()) }));
    //console.log(result);
    setData(result);
    setLoading(false);
  }


  useEffect(() => {
    fetchjobs();
  },[])
  return (
    <ThemeProvider theme={theme}>
      <Header openNewJob={() => setOpen(true)}/>
      <Newjob closeJob={() => setOpen(false)} open={open} postJob={postJob}/>
      <Grid container justify="center">
        <Grid item xs={10}>
           <Search fetchJobCustom={fetchJobCustom}/>
           {
            loading ?( 
            <Box display="flex" justifyContent="center">
               <CircularProgress/>
            </Box>)
            
            :(
            <>
            {custom && (
            <Box display="flex"  my={2} justifyContent="flex-end">
             
            <img onClick={fetchjobs} style={{cursor:"pointer", marginTop:"12px"}} height="35px" width="35px" src="https://img.icons8.com/external-neu-royyan-wijaya/2x/external-cancel-neu-interface-neu-royyan-wijaya-3.png"/>
            <p>Custom Search</p> 
            </Box>  
            )}
            {data.map((el) => (<JobList key={el.id} {...el}/>))}
            </>
           )}
           
        </Grid>

      </Grid>

    </ThemeProvider>
  );
}

export default App;
