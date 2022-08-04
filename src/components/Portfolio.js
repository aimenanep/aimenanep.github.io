import React from 'react'
import terminalportfolio from "../img/terminal_portfolio.png"

export default function Portfolio() {
  return (
    <div>
        <img src={terminalportfolio} width="100%" />
        <div className="ubuntu" style={{background: "#000",paddingBottom: "10px",paddingLeft: "20px",paddingRight: "20px"}}>
            <p style={{fontSize: "20px",lineHeight: "42px",fontWeight: 600, marginTop:0}}>
                <a href="https://drive.google.com/drive/folders/10v3SqP3PG6SqyuJdAKT8owGadM0u_VQj?usp=sharing"  target="_blank" className="text-linear-primary">
                    some_screen_shot_of_my_work
                </a>
            </p>
        </div>
    </div>
  )
}
