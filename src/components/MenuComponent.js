import React from "react";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'




export default function Menu({setStyling, styling, setBorder, border, shadow, setShadow}){

    const handleChange = (e) => {
        setStyling({
            ...styling, [e.target.name]: e.target.value
        })
    }

    const handleBorder = (e) =>{
        setBorder(e.target.checked)
        if(border){
            setStyling({
              ...styling, borderStyle: "none"
            })
        }
    }

    const handleColorBorder = (e) => {
        setStyling({
            ...styling, borderColor: e
        })
    }

    const handleColorBackground = (e) =>{
        setStyling({
            ...styling, backgroundColor: e
        })
    }

    const handleColorText = (e) => {
        setStyling({
            ...styling, color: e
        })
    }

    const handleShadow = (e) => {
        setShadow(e.target.checked)
    }

    const handleColorShadow = (e) =>{
        setStyling({
            ...styling, shadowColor: e
        })
    }

    return(

        <div className="menu-container">
           <form>
           <div className="menu-group">
                        <label htmlFor="height">Button Height</label>
                        <div className="input-group">
                            <Slider name="height" id="height" aria-label="Button Height" valueLabelDisplay="auto" defaultValue={30} min={20} max={250} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="menu-group">
                        <label htmlFor="width">Button Width</label>
                        <div className="input-group">
                            <Slider name="width" id="width" aria-label="Button Width" valueLabelDisplay="auto" defaultValue={80} min={20} max={350} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="menu-group">
                        <label htmlFor="backgroundColor">Background Color</label>
                        <div className="input-group">
                            <MuiColorInput id="backgroundColor" format="hex" color="primary" focused value={styling.backgroundColor} onChange={handleColorBackground}/>
                        </div>
                    </div>

                    <div className="menu-group"> 
                        <label htmlFor="value">Button Text</label>
                        <div className="input-group">
                            <TextField sx={{width:170}} id="value" name="value" variant="outlined" onChange={handleChange} size="small" focused/>
                        </div>
                    </div>

                    <div className="menu-group">
                        <label htmlFor="fontFamily">Font Family</label>
                        <div className="input-group">
                            <Select variant="standard" sx={{minWidth:150}} value={styling.fontFamily} onChange={handleChange} label="Font Family" name="fontFamily" id="fontFamily">
                                <MenuItem value={"Montserrat"}>Montserrat</MenuItem>
                                <MenuItem value={"Roboto"}>Roboto</MenuItem>
                                <MenuItem value={"Open Sans"}>Open Sans</MenuItem>
                                <MenuItem value={"Oswald"}>Oswald</MenuItem>
                                <MenuItem value={"Merriweather"}>Merriweather</MenuItem>
                                <MenuItem value={"Lato"}>Lato</MenuItem>
                                <MenuItem value={"Poppins"}>Poppins</MenuItem>
                            </Select>
                        </div>
                    </div>
                
                    <div className="menu-group">
                        <label htmlFor="fontSize">Font Size</label>
                        <div className="input-group">
                            <Slider name="fontSize" id="fontSize" aria-label="Font Size" valueLabelDisplay="auto" defaultValue={14} min={10} max={50} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="menu-group">
                        <label htmlFor="fontWeight">Font Weight</label>
                            <div className="input-group">
                                <Slider name="fontWeight" id="fontWeight" aria-label="Font Weight" valueLabelDisplay="auto" defaultValue={400} min={100} max={900} step={100} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="menu-group">
                        <label htmlFor="textColor">Text Color</label>
                        <div className="input-group">
                            <MuiColorInput id="textColor" format="hex" color="primary" focused value={styling.color} onChange={handleColorText}/>
                        </div>
                    </div>
                
                
                    <div className="menu-group">
                        <label htmlFor="borderRadius">Border Radius</label>
                        <div className="input-group">
                            <Slider name="borderRadius" id="borderRadius" aria-label="Border Radius" valueLabelDisplay="auto" defaultValue={0} max={80} step={0.5} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="menu-group">
                        <div className="switch-group">
                            <label htmlFor="borderSwitch">Border</label>
                            <div className="input-group">
                                <Switch id="borderSwitch" onChange={handleBorder}/>
                            </div>
                        </div>
                    </div>
                
                {border && 
                <div className="border-container">
                        <div className="menu-group">
                            <label htmlFor="borderStyle">Border style</label>
                            <div className="input-group">
                                <Select variant="standard" sx={{minWidth:150}} value={styling.borderStyle} onChange={handleChange} label="Border Style" name="borderStyle" id="borderStyle">
                                    <MenuItem value={"none"}>None</MenuItem>
                                    <MenuItem value={"solid"}>Solid</MenuItem>
                                    <MenuItem value={"dashed"}>Dashed</MenuItem>
                                    <MenuItem value={"dotted"}>Dotted</MenuItem>
                                    <MenuItem value={"double"}>Double</MenuItem>
                                    <MenuItem value={"groove"}>Groove</MenuItem>
                                </Select>
                            </div>
                        </div>
                        
                        <div className="menu-group">
                        <label htmlFor="borderWidth">Border Width</label>
                            <div className="input-group">
                                <Slider id="borderWidth" defaultValue={1} aria-label="Border Width" valueLabelDisplay="auto" min={1} max={20} step={0.5} name="borderWidth" onChange={handleChange} />
                            </div>
                        </div>
                   
                    
                    <div className="menu-group">
                        <label htmlFor="borderColor">Border color</label>
                        <div className="input-group">
                            <MuiColorInput id="borderColor" format="hex" color="primary" focused value={styling.borderColor} onChange={handleColorBorder}/>
                        </div>
                    </div>
                </div>}

                    <div className="menu-group">
                        <div className="switch-group">
                            <label htmlFor="shadow">Shadow</label>
                            <div className="input-group">
                                <Switch id="shadow" onChange={handleShadow}/>
                            </div>
                        </div>
                    </div>

                    {shadow && 
                        <div className="shadow-container">
                            <div className="menu-group">
                                <label htmlFor="horizontalShadow">Horizontal Shadow</label>
                                <div className="input-group">
                                    <Slider id="horizontalShadow" defaultValue={0} aria-label="Horizontal Shadow" valueLabelDisplay="auto" min={-40} max={40} step={0.1} name="horizontalShadow" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="menu-group">
                                <label htmlFor="verticalShadow">Vertical Shadow</label>
                                <div className="input-group">
                                    <Slider id="verticalShadow" defaultValue={0} aria-label="Vertical Shadow" valueLabelDisplay="auto" min={-30} max={30} step={0.1} name="verticalShadow" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="menu-group">
                                <label htmlFor="blur">Blur</label>
                                <div className="input-group">
                                    <Slider id="blur" defaultValue={0} aria-label="Blur" valueLabelDisplay="auto" min={0} max={50} step={0.1} name="blur" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="menu-group">
                                <label htmlFor="spread">Spread</label>
                                <div className="input-group">
                                    <Slider id="spread" defaultValue={0} aria-label="Spread" valueLabelDisplay="auto" min={0} max={50} step={0.1} name="spread" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="menu-group">
                                <label htmlFor="shadowColor">Shadow Color</label>
                                <div className="input-group">
                                    <MuiColorInput id="shadowColor" format="hex" color="primary" focused value={styling.shadowColor} onChange={handleColorShadow}/>
                            </div>
                        </div>
                    </div>}

                
                    <div className="menu-group">
                        <label htmlFor="className">Class Name</label>
                        <div className="input-group">
                            <TextField sx={{width:170}} id="className" name="className" variant="outlined" onChange={handleChange} size="small" focused/>
                        </div>
                    </div>
           </form>
        </div>

    )
}