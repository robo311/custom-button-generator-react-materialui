import React, { useState } from "react"
import MenuComponent from "./components/MenuComponent"
import Preview from "./components/Preview"
import CssPreview from "./components/CssPreview"
import { slide as Menu } from 'react-burger-menu'

function App() {

  const [border, setBorder] = useState(false)
  const [shadow, setShadow] = useState(false)


  const [styling, setStyling] = useState({
    width: "80",
    height: "30",
    value: "Button",
    fontSize: "14",
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: "#000000",
    borderRadius: "0",
    borderColor: "#aabbcc",
    borderStyle: "none",
    borderWidth: "1",
    className: "button",
    backgroundColor: "#ffffff",
    horizontalShadow: "0",
    verticalShadow: "0",
    blur: "0",
    spread: "0",
    shadowColor: "#dfdfdf",
  })


  const style = {
    width: styling.width + "px",
    height: styling.height + "px",
    fontSize: styling.fontSize + "px",
    fontWeight: styling.fontWeight,
    fontFamily: styling.fontFamily,
    color: styling.color,
    borderRadius: styling.borderRadius + "px",
    borderColor: styling.borderColor,
    borderStyle: styling.borderStyle,
    borderWidth: styling.borderWidth + "px",
    backgroundColor: styling.backgroundColor,
    boxShadow: styling.horizontalShadow + "px" + " " + styling.verticalShadow + "px" + " " + styling.blur + "px" + " " + styling.spread + "px" + " " + styling.shadowColor,
  }

  return (
    <div className="App">
      <div className="small-dev-menu">
        <Menu>
          <MenuComponent border={border} setBorder={setBorder} setStyling={setStyling} styling={styling} shadow={shadow} setShadow={setShadow}/>
        </Menu>
      </div>
      <div className="large-dev-menu">
        <MenuComponent border={border} setBorder={setBorder} setStyling={setStyling} styling={styling} shadow={shadow} setShadow={setShadow}/>
      </div>
      <div className="page-preview">
        <Preview style={style} text={styling.value}/>
        <CssPreview classNamee={styling.className} border={border} shadow={shadow} style={style}/>
      </div>
    </div>
  );
}

export default App;
