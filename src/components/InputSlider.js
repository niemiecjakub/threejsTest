import React, {useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {DimentionsContext} from '../DimentionsContext';



export default function InputSlider({title}) {
  const [dimentions, setDimentions] = useContext(DimentionsContext)
  const [value, setValue] = useState(dimentions[title]);


  const handleSliderChange = (event, newValue) => {
      setValue(newValue);
      setDimentions({...dimentions, [title] : newValue})
  };

  const handleInputChange = (event) => {
    if (Number(event.target.value)>=0 && Number(event.target.value)<=100) {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
      setDimentions({...dimentions, [title] : Number(event.target.value)}) 
    }
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div >
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}


