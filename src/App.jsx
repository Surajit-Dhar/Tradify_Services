
import './App.css';
import {Box, Grid, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import Header from './components/Header';
import Search from './components/Search';
import JobList from './components/JobList';
import Newjob from './components/Newjob';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Newjob/>
      <Grid container justify="center">
        <Grid item xs={10}>
           <Search/>
           <JobList/>
        </Grid>

      </Grid>

    </ThemeProvider>
  );
}

export default App;
