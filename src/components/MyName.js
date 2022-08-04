
import linkedin from "../img/linkedin.svg"
export default function MyName() {
  return (
    <>
    <h1 className="text-white text-shadow " style={{marginBottom: 0}}>
        Aimen  The Geek  
        <a href="https://www.linkedin.com/in/aimen-boughezala-mohamed-82850b177/" target_blank>
            <img src={linkedin} />
        </a>
    </h1>
    <h4 className="text-linear-primary" style={{fontWeight: 700,marginTop: 0,paddingLeft: "12px"}}>Full Stack Developer</h4>

    </>
    
  )
}
