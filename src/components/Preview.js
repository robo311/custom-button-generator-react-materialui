import React, { useState } from "react";
import { MuiColorInput } from 'mui-color-input'

export default function Preview({style, text}){

    const [backgroundcolor, setBackgroundColor] = useState("#333333")

    const handleBackground = (e) => {
        setBackgroundColor(e)
    }

    const backgroundStyle = {
        backgroundColor: backgroundcolor
    }

    return(
        <div className="preview-container">
            <div className="preview">
                <h2>Preview</h2>
                <div style={backgroundStyle} className="button-preview">
                    <button style={style}>{text}</button>
                </div>
                <div className="preview-footer">
                    <MuiColorInput format="hex" size="small" color="success" variant="filled" onChange={handleBackground} value={backgroundcolor}/>
                </div>
            </div>
        </div>
    )
}