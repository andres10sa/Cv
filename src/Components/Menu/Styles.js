import styled from '@emotion/styled';


const Main = styled.main`
  background-color: #191a21;   
  width:250px;
  >.activo {
    background: #21222c;
  }

  >.item {
    text-align: center;
    display: flex;
    align-items: center;
    padding: 2px 20px;
    cursor: pointer;
    position: relative;
    &:hover {
      background: #21222c;
    }

    > .flecha {
      font-size: 10px;
      margin-right: 10px;
      position: relative;
      top: 1px;
    }
    > .carpeta {
      font-size: 12px;
      margin-right: 5px;
      position: relative;
      top: 2px;
      color: #67f195;
    }
    > .carpeta2 {
      color: #45c06e;
    }
    > .carpeta3 {
      color: #2b9c51;
    }
    > .icono {
      position: absolute;
      left: 42px;
      top: 10px;
      font-size: 7px;
    }
    > .icono2 {
      left: 39px;
    }
  }
  .subitem {
    padding-left: 35px;
    position: relative;
    .readme{
      color: rgb(168, 165, 165);
      position: relative;
      left:3px;
      margin-right:9px;
      top:0;
    }
    .ignore{
      color:orange;
      position: relative;
      left:2px;
    }
    .npm{
      color:rgb(192, 6, 6);
    }
    .carpeta4 {
      color: #edb879;
    }
    .js3{
      background-color:#fff;
      width:8px;
      height:8px;
      border-radius:100%;
      left:2px;
      position: relative;
      margin-right:11px;
    }
    .ignore{
      position: absolute;
      left:-2px;
      top:-1px;
      z-index:20000;
      color:orangered;

    }
  }
  .subitem2{
    padding-left: 60px;
    cursor: pointer;
    &:hover {
      background: #21222c;
    }
    .js{
      color:#fcce63;
      font-size:10px;
      font-weight:900;
      position: relative;
      top:1px;
      margin-right:4px;
    }
  
    .js2{
      background-color:#fff;
      color:#fff;
      display:inline-block;
      height:10px;
      width:6px;
      position: relative;
      margin-right:7px;
  
    }
    
    .css{
      color:rgb(41, 101, 241);
       z-index:1000; 
      position: absolute;
      left:-2px;
      top:-1px;
      font-size:14px;
    }
  }
  
`;

const styles = {
  Main,
};
export default styles;

