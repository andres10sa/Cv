import styled from '@emotion/styled';

const General=styled.div`
  width:100%;
 display:flex;
 justify-content:center;


`;
const Contenedor=styled.div`
   width:460px;
   background-color:#fff;
   display:flex;
   flex-wrap:wrap;
   padding:30px 20px;
   border-radius:4px;
   background-image:url('https://www.mises.org.es/wp-content/uploads/2011/12/dec0521.jpg');
  background-size:cover;
  background-repeat:no-repeat;
`;
const Titulo=styled.h3`
    width:100%;
    color:#000;
    font-size:22px;
    margin-bottom:10px;
    @media(max-width:768px){
      font-size:18px;
   }
`;
const Fecha = styled.div`
  width:30%;
  border-right:2px solid #ccc;
`;
const Texto=styled.p`
  color:grey;
  margin:20px 0;
  font-size:15px;
  position: relative;
`;
const Nombre=styled.p`
  color:#000;
  margin:20px 0;
  font-size:15px;
  position: relative;
`;
const Punto = styled.p`
    position: absolute;
    width:8px;
    height:8px;
    top:6px;
    right:-5px;
    background-color:#191a21;
    border-radius:100%;
`;
const Instituto = styled.div`
  width:70%;
  padding-left:10px;
 
`;
const Certificados = styled.div`
   width:100%;
   margin-top:20px;
   display:flex;
   justify-content:space-around;
   .img{
       transition:.4s all;
       width:90px;
       cursor: pointer;
       border-radius:2px;
       
       &:hover{
           transform:translateX(30px);
           transform:scale(2)
       }
   }
`;
const Certificado = styled.img`

 transition:.4s all;
       width:90px;
       cursor: pointer;
       border-radius:2px;
       &:hover{
           transform:translateX(30px);
           transform:scale(2)
       }
`;

const styles={
    General,Contenedor,Fecha,Instituto,Texto,Punto,Nombre,Titulo,Certificados,Certificado
}
export default styles;