import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, CircularProgress, Grid, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import Header from './components/Header';
import Search from './components/Search';
import JobList from './components/JobList';
import Newjob from './components/Newjob';
//import Details from "./data";
import  firestore from './firebase/config';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchjobs = async () => {
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').get();
    //console.log(req);
    const result = req.docs.map(job => ({...job.data(),  id: job.id, postedOn: Math.abs(job.data().postedOn.toDate()) }));
    //console.log(result);
    setData(result);
    setLoading(false);
  };
  useEffect(() => {
    fetchjobs();
  },[])
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      {/* <Newjob/> */}
      <Grid container justify="center">
        <Grid item xs={10}>
           <Search/>
           {
            loading ? 
            <Box display="flex" justifyContent="center">
               <CircularProgress/>
            </Box>
            
            :
            data.map((el) => <JobList key={el.id} {...el}/>)
           }
           
        </Grid>

      </Grid>

    </ThemeProvider>
  );
}

export default App;
