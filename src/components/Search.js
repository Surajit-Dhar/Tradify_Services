import React from "react";
import {Box, Select, MenuItem} from "@mui/material";
import "../App.css"
import styled from "styled-components";

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


const Search = () => {
  // const Classes = useStyles();
  return (
    <Box p={1} mt={-2} mb={2} className="main">
        <Select className="main-1" disableUnderline variant="filled" defaultValue="Full-Time">
            <MenuItem value="Part-Time">Part-Time</MenuItem>
            <MenuItem value="Full-Time">Full-Time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
        </Select>
        <Select className="main-1" disableUnderline variant="filled" defaultValue="Office-mode">
            <MenuItem value="Work-from-home">Work-from-home</MenuItem>
            <MenuItem value="Office-mode">Office-mode</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
        </Select>
        <StyledButton variant="contained" className="search">FILTER</StyledButton>
    </Box>
  )
}

export default Search;