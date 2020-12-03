import React from "react";
import styles from "./Styles";

const Footer = () => {
  const { Footer, Cont1, Cont2 } = styles;
  return (
    <Footer>
      <Cont1>
        <i className="fas fa-code-branch icon"></i>
        <i className="fas fa-cloud-upload-alt icon"></i>
        <i className="fas fa-exclamation-circle icon"></i>
        <i className="fas fa-exclamation-triangle icon"></i>
      </Cont1>

      <Cont2>
        <small>Ln 15, Col 34</small>
        <small>Spaces:4</small>
        <small>UTF-8</small>
        <small>CRLF-8</small>
        <small>JavaScript</small>
        <small className="live">
          Go Live
          <div className="sub">
            <p className="base">l</p>
            <i className="fas fa-bullseye iconolive"></i>
          </div>
        </small>
        <small className="prettier">
          Prettier:
          <i className="fas fa-check icon exito"></i>
        </small>
        <i className="far fa-user icon usuario"></i>
        <i className="far fa-bell icon bell"></i>
      </Cont2>
    </Footer>
  );
};

export default Footer;
