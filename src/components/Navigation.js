import React, { useState } from 'react'

export default function Navigation() {

    const [open, setOpen] = useState(false)

    const isOpen = () => {
        setOpen(prevOpen => !prevOpen)
    }

  return (

    <div>
        <div className="menu-navigation">
            <button onClick={isOpen}>Styling</button>
            <button onClick={isOpen}>Color</button>
            <button onClick={isOpen}>Shadow</button>
        </div>
    </div>
  )
}
