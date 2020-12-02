import React from "react";
import styles from "./Styles";

const Footer = () => {
  const { Footer, Cont1, Cont2 } = styles;
  return (
    <Footer>
      <Cont1>
        <i class="fas fa-code-branch icon"></i>
        <i class="fas fa-cloud-upload-alt icon"></i>
        <i class="fas fa-exclamation-circle icon"></i>
        <i class="fas fa-exclamation-triangle icon"></i>
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
            <i class="fas fa-bullseye iconolive"></i>
          </div>
        </small>
        <small className="prettier">
          Prettier:
          <i class="fas fa-check icon exito"></i>
        </small>
        <i class="far fa-user icon usuario"></i>
        <i class="far fa-bell icon bell"></i>
      </Cont2>
    </Footer>
  );
};

export default Footer;
