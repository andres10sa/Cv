import styled from '@emotion/styled';

const General=styled.div`
  width:100%;
 display:flex;
 justify-content:center;


`;
const Contenedor=styled.div`
 margin-top:100px;
`;
const Imagen=styled.img`
  position: relative;
`
const Texto = styled.p`
  font-size:13px;
  color:#ccc;
  margin:8px 0;
`;
const Boton = styled.span`
  display:inline-block;
  margin:0 4px;
  padding:1px 6px;
  font-size:10px;
  box-shadow: 0px 0px 3px 2px rgba(0,0,0,.4);
  border-radius:1px;
  border-style:groove;
  border-color:#191a21;
  border-width: 1px; 
  
`;

const styles={
    General,Contenedor,Imagen,Texto,Boton
}
export default styles;