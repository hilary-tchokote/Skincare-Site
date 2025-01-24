import { useState } from "react";
import Box from '@mui/material/Box';
// import { TextField } from "@mui/material";
// import TextField from '@mui/material/TextField';

    

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleBlur() {
    if (!inputValue.includes('@')){
        alert("Attention this is not a valid email, there's no @ 🚨")
    }
    }

  return (
    <footer className="sbt-footer">
    {/* <div className="sbt-footer-elem"> */}
    <div className="mb-3">
         <p> For Skincare Addicts 🥰</p>
    </div>
    <div className="mb-3">
        Leave your mail :
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 4, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <input placeholder="Enter your email"
       value={inputValue}
       variant="outlined"  
       onChange={(e) => setInputValue(e.target.value)}
       onBlur={handleBlur}  
      />
    </Box>
    
    </div>
    </footer>
  );
}

export default Footer;
