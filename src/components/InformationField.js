import React, {useContext, useRef, useState} from 'react'
import InputSlider from './InputSlider';
import {DimentionsContext} from '../DimentionsContext'
import {Button, Typography, TextField} from '@material-ui/core'


const inputTitles = ["height", "width", "depth"]
const colors = ['#f12345', '#a43c45', "#03fc20", "#f003fc", "#fceb03", "#03fcf8", "#B7A7C7", "#9C9079", "#AAF8E7"]
const calculateVolume = (w,h,d) => w*h*d
const calculatePrice = (v) => Math.round(v*0.15)
const checkIfColorIsHex = (hex) => {
  return (/^#[0-9A-F]{6}$/i.test(hex))
}

const InformationField = () => {
  const [error, setError] = useState(false)
  const [dimentions, setDimentions] = useContext(DimentionsContext)
  const {width, height, depth} = dimentions
  const textRef = useRef()
  const volume = calculateVolume(width, height, depth)
  const price = calculatePrice(volume)

  const handleColorChange = (e) => {
    const newColor = e.target.style.backgroundColor
    setDimentions({...dimentions, color : newColor})
  }
  const handleColorInput = (e) => {
    const hexValue = (textRef.current.value)
    if (checkIfColorIsHex(hexValue)) {
      setError(false)
      setDimentions({...dimentions, color : hexValue})
    } else {
      setError(true)
    }
  }


  return (
    <div className="data-container">
      <div className="input-container">
        {inputTitles.map((element) => {
          return (<InputSlider key={element} title={element}/>)
        })}
        <Typography variant="subtitle1">Your current dimentions (w. x h. x d.): {width}m x {height}m x {depth}m</Typography>
      </div>

      <div className="info-container">
        <div className="color-container">
          <Typography variant="subtitle1" align="center">Select one of avaiable colors</Typography>
          <div className="center">
          {colors.map(color => {
            return <div className="color-previev" key={color} style={{backgroundColor: color}} onClick={handleColorChange}/>
          })}
          </div>
          <div className="center">
            <Typography variant="subtitle1" align="center">Or type your hex color</Typography>
          </div>
          <div className="center">
            <TextField
            inputRef={textRef}
            label="HEX color"
            placeholder="#ffffff"
            align="center"
            error = {error? true : false}
            helperText= {error? "Enter valid hex value" : null}
            />
            <Button variant="outlined" color="primary" onClick={handleColorInput}>Submit</Button>
          </div>
        </div>

  
        <Typography variant="h4" align="center">Price: {price}$ </Typography>
        <Button variant="contained" color="primary" fullWidth="true">ADD TO CART</Button>

      </div>
    </div>
  )
}

export default InformationField