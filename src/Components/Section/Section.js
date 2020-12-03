import React from "react";
import App from './App/App';
import Appcss from './App/Appcss';
import Experience from './Experience/Experience';
import Profile from './Profile/Profile';
import Studies from './Studies/Studies';
import Technologies from './Technologies/Technologies';
import styles from "./Styles";

const Section = ({currentItem,open, setOpen,setCurrentItem }) => {
  const { Section } = styles;

  const removeItem = (name)=>{
    const nuevo = open.filter(ele=>ele!==name);
    setOpen(nuevo);
    setCurrentItem(nuevo[nuevo.length-1])
    
  };

  return (
    <Section>
      <div className="header-section">
        {open.map((ele,index) => (
          <div className={currentItem===ele?'openItem currentItem':'openItem'} key={index} >
            <div className="nombre"onClick={()=>setCurrentItem(ele)}>
              {!ele.includes("css") ? (
                <small className="openicon">JS</small>
              ) : (
                <small className="openicon">
                  <i className="fab fa-css3-alt css"></i>
                  <div className="csscont"></div>
                </small>
              )}
              <small className="componente">{ele}</small>
            </div>
            <small className="cerrar" title="Close (Ctrl+F4)" onClick={()=>removeItem(ele)}>
              x
            </small>
          </div>
        ))}
      </div>
      
      <div className="seccion-actual">
        {currentItem==='Profile.js' && (<Profile/>)}
        {currentItem==='Experience.js'&&(<Experience/>)}
        {currentItem==='Studies.js'&&(<Studies/>)}
        {currentItem==='Technologies.js'&&(<Technologies/>)}
        {currentItem==='App.js'&&(<App/>)}
        {currentItem==='App.css'&&(<Appcss/>)}
  
      </div>

   
    </Section>
  );
};

export default Section;
