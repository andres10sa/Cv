import styled from '@emotion/styled';

const General=styled.div`
 width:100%;
 display:flex;
 justify-content:center;
`;
const Contenedor=styled.div`
    width:500px;
    background-color: #191a21;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.74);
    padding:20px;
    border-radius:6px;
   
 
`;
const Titulo=styled.h3`
    font-size:22px;
    margin-bottom:10px;
    text-align:center;
`;
const Nombre=styled.p`
  font-size:14px;
  margin-bottom:5px;
`;
const Barra=styled.div`
  background-color:#fff;
  width:100%;
  height:25px;
  border-radius:4px;
  position: relative;
  cursor: pointer;
  overflow:hidden;
`;
const Sombra=styled.div`
  position: absolute;
  top:0;
  left:0;
  width:70%;
  height:100%;
  background-color: grey;
  
`;
const Tecnologia=styled.div`
  margin:15px 0;
`;


const styles={
    General,Contenedor,Titulo,Tecnologia,Nombre,Barra,Sombra
}
export default styles;