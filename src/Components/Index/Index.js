import React from "react";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Section from "../Section/Section";
import styles from "./Styles";

const Index = () => {
  const { General, Main, Submenu } = styles;
  return (
    <General>
      <Header />
      <Main>
        <Aside />
        <Submenu>
           <Menu /> 
          <Section />
        </Submenu>
      </Main>
      <Footer />
    </General>
  );
};

export default Index;
