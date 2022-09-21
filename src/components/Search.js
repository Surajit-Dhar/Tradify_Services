import React,{useState} from "react";
import {Box, Select, MenuItem,CircularProgress } from "@mui/material";
import "../App.css"
import styled from "styled-components";
import { async } from "@firebase/util";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: rgb(182, 126, 235);
  font-size: 17px;
  color: white;
  border:none;
  padding:15px 49px;
  margin:10px;
  margin-left:50px;
  border-radius: 10px;
  cursor: pointer;
`;



// const useStyles = styled((theme) => ({
//   wrapper:{
//     border:"1px solid red "
//    }
// }));


const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [jobSearch, setJobSearch] = useState({
    type:"Full-Time",
    location:"Office-mode"
  })

  const handleChange = (e) => {
    e.preventDefault();
    setJobSearch(el => ({...el , [e.target.name]: e.target.value}));
}

const search = async () => {
  setLoading(true);
  await props.fetchJobCustom(jobSearch);
  setLoading(false);
}
  // const Classes = useStyles();
  return (
    <Box p={1} mt={-2} mb={2} className="main">
        <Select onChange={handleChange} name="type" value={jobSearch.type}className="main-1" disableUnderline variant="filled" >
            <MenuItem value="Part-Time">Part-Time</MenuItem>
            <MenuItem value="Full-Time">Full-Time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
        </Select>
        <Select onChange={handleChange} name="location" value={jobSearch.location} className="main-1" disableUnderline variant="filled" >
            <MenuItem value="Work-from-home">Work-from-home</MenuItem>
            <MenuItem value="Office-mode">Office-mode</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
        </Select>
        <StyledButton onClick={search} disabled={loading} variant="contained" className="search">
        {
            loading ? <CircularProgress size={22}/>:
            "FILTER"

        }
        </StyledButton>
    </Box>
  )
}

export default Search;