import styled from "@emotion/styled";

const General = styled.div`
  width: 60%;
  margin: auto;
  background: #fff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.74);
`;

const ContFoto = styled.div`
  width: 100%;
  display: flex;
background-color: #191a21;
  align-items: center;
  justify-content: space-between;
  .foto {
    width: 150px;
    height: 200px;
  }
  > .datos {

    width:200px;
    text-align:start;
    .nombre {
      font-size: 35px;
      font-weight: 900;
      text-align:start;
      margin:0;
      padding:0;
      color:rgb(41, 101, 241);
      color:#fcce63;
      
    }
  
    .apellido {
      font-size: 35px;
      font-weight: 900;
      color:#fcce63;
    }
    .icono{
        font-size:12px;
        position: relative;
      
    }
    .cel{
        bottom:1px;
    }
  }
  .numericos{
        font-size:14px;
    }
`;

const Perfil = styled.div`
   color:#000;
   >.presentacion{
       font-size:14px;
       padding:15px 20px;
   }
   >.skills{
       padding:15px 20px;
       >.titulo{
         font-size:18px;
         margin-bottom:4px;
       }
       >.skill{
           font-size:14px;
       }
   
   }
`;

const styles = { General, ContFoto,Perfil };

export default styles;
