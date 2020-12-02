import styled from "@emotion/styled";

const Footer = styled.footer`
  background-color: #191a21;
  color: #fff;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
`;
const Cont1 = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  > .icon {
    font-size: 12px;
    margin-right: 10px;
    
  }
`;
const Cont2 = styled.div`
  display: flex;
  cursor: pointer;
  > small {
    font-size: 11px;
    margin-right: 12px;
  }
  > .live {
    display: flex;
    position: relative;
    .sub {
      position: relative;
      margin-left:8px;
      > .iconolive {
        position: absolute;
        top: 0;
      }
      > .base {
        color: #fff;
        position:absolute;
        top:3px;
        font-weight:bold;
        left:4px;
        z-index:100;
      }
    } 
  }
  >.prettier{
      margin-left:12px;
      display:flex;
      >.exito{
        position:relative;
        top:3px;
        margin-left:5px;
      }
    }
    >.icon{
      font-size: 12px;
     margin-right: 10px;
      position: relative;
      top:3px;
      cursor: pointer;
    }
    >.usuario{
      top:2px;
      font-size:11px;
    }
`;

const styles = {
  Footer,
  Cont1,
  Cont2,
};
export default styles;
