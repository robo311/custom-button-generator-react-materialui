import React from "react";

export default function CssPreview({style, border, classNamee, shadow}){
    return(
        <div className="css-preview-container">
            <div className="css-preview">
                <h2>CSS</h2>
                <div className="css">
                    <div className="css-text">
                        {`.${classNamee}{`}
                        {`\n width: ${style.width}; \n height: ${style.height}; \n background-color: ${style.backgroundColor}; \n font-size: ${style.fontSize}; \n font-weight: ${style.fontWeight}; \n font-family: '${style.fontFamily}'; \n color: ${style.color}; \n border-radius: ${style.borderRadius}; \n`}

                        {border && `border-color: ${style.borderColor}; \n border-style: ${style.borderStyle}; \n border-width: ${style.borderWidth}; \n`}

                        {shadow && `box-shadow: ${style.boxShadow}; \n`}
                    </div>
                    <span>{`}`}</span>
                </div>
            </div>
        </div>
    )
}