import about from "../img/ls_about.png"

export default function About() {
  return (
    <>
    <img src={about} alt="" style={{width:"100%"}} />
    <div className="ubuntu" style={{background: "#000",paddingBottom: "10px",paddingLeft: "20px",paddingRight: "20px"}}>
        <p style={{fontSize: "20px",lineHeight: "42px",fontWeight: 600, marginTop:0}}>
                - Full stack  Developer open to new ideas.<br/>
                - Enjoy progamming and coding.<br/>
                - Problems solving is a challenge for me. <br/>
                - Love  both of python and javascript.  <br/>
                - Big fan of iot and microcontrollers. <br/>
                - Working with a  team and exchanging ideas, this is the place where I belong.<br/>
                - Having an interview is a great  opportunity  for me to  discover more about the most recent workflows and technologies. <br/>
        </p>
    </div>
    </>
  )
}
