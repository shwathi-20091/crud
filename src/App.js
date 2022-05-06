
import './App.css';
import BasicCard from './card.js';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
//import PlusIcon from '@mui/icons-material/Delete';
//import AddIcon from '@mui/icons-material/Add';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function App() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="App">
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          crud operation
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box> 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
         required
          label="title"
          id="outlined-required"
        />
        <br></br>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="type your content"
        style={{ width: 200 }}
      />
       </div>   
       <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">difficulty level</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
   
    name="radio-buttons-group"
  >
    <FormControlLabel value="easy" control={<Radio />} label="easy" />
    <FormControlLabel value="moderate" control={<Radio />} label="moderate" />
    <FormControlLabel value="hard" control={<Radio />} label="hard" />
  </RadioGroup>
</FormControl>
<Button href="./Card.js">Link</Button>
<BasicCard />
        </Box> </div>
  );
}

export default App;
