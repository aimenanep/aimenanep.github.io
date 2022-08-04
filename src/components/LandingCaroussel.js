import arduino from "../img/arduino.png"
import bootstrap from "../img/bootstrap.png"
import cpanel from "../img/cpanel.png"
import css from "../img/css.png"
import django from "../img/django.png"
import docker from "../img/docker.png"
import html from "../img/html.png"
import stackoverflow from "../img/icons8-stack-overflow-240.png"
import js from "../img/js.png"
import mangodb from "../img/mangodb.png"
import material from "../img/material.png"
import mysql from "../img/mysql.png"
import nodde from "../img/node.png"
import nppm from "../img/npm.png"
import postgres from "../img/postgres.png"
import python from "../img/python.png"
import raspberrypi from "../img/raspberrypi.png"
import redux from "../img/redux.png"
import sass from "../img/sass.png"
import visualstudio from "../img/visualstudio.png"
import firebase from "../img/firebase.png"
import react from "../img/react.png"
import github from "../img/github.png"
import restapi from "../img/icons8-rest-api-96.png"
import linux from "../img/linux.png"
import debian from "../img/debian.png"
import ubuntu from "../img/ubuntu.png"
import tailwind from "../img/tailwind.png"
import plesk from "../img/plesk.png"
import Slider from "react-slick";

export default function LandingCaroussel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        timeout:100,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
      };


  return (
    <>
        <div style={{background: "#000",paddingTop:"10px",paddingBottom:"40px",paddingLeft:"20px",paddingRight:"20px"}}>
        {/* <!-- <h2 className="light" style={{paddingBottom: "20px"textAlign:"center",fontWeight:700}},>What i use </h2> --> */}
        <Slider 
            pauseOnDotsHover={true} 
            swipeToSlide={true} 
            {...settings} 
            >
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={debian} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={linux} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={ubuntu} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={docker} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={django} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={nodde} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={nppm} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={react} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={redux} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={github} style={{width: "100%",filter: "invert(1)"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={tailwind} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={bootstrap} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={material} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={css} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={sass} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={html} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={stackoverflow} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={js} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={python} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={mangodb} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={mysql} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={postgres} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={firebase} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={raspberrypi} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={arduino} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={visualstudio} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={restapi} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={cpanel} style={{width: "100%"}}/></div>
            </div>
            <div className="item text-center">
                <div style={{paddingLeft: "15px",paddingRight: "15px"}}><img src={plesk} style={{width: "100%"}}/></div>
            </div>
          </Slider>
    </div>
    </>
  )
}
