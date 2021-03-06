import React,{useState} from "react";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Section from "../Section/Section";
import styles from "./Styles";

const Index = () => {
  const { General, Main, Submenu } = styles;
  const [current,setCurrent]=useState(true);
  const [currentItem,setCurrentItem]=useState('');
  const [open,setOpen]=useState([]);

  return (
    <General>
      <Header />
      <Main>
        <Aside setCurrent={setCurrent} current={current}/>
        <Submenu>
          {current&&(
          <Menu
          currentItem={currentItem}
          open={open}
          setCurrentItem={setCurrentItem}
          setOpen={setOpen}
          />
          )} 
          <Section 
          currentItem={currentItem}
          open={open} 
          setCurrentItem={setCurrentItem}
          setOpen={setOpen}/>
        </Submenu>
      </Main>
      <Footer />
    </General>
  );
};

export default Index;
