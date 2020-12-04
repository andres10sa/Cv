import styled from "@emotion/styled";

const General = styled.div`
  width: 65%;
  margin: auto;
  background: #fff;
  box-shadow: 0px 0px 3px 2px rgba(0,0,0,.4);
  padding-bottom:30px;
  @media(max-width:768px){
    width: 96%;
  }
`;

const ContFoto = styled.div`
  width: 100%;
  display: flex;
background-color: #191a21;
  align-items: center;
  justify-content: space-between;
  .foto {
    width: 150px;
    height: 190px;
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
       padding:15px 25px;
   }
   >.skills{
       padding:15px 25px;
       display:flex;
       flex-wrap:wrap;
       >.sub{
         width:50%;
  
         .contIcon{
           margin:0 6px;
           width:60px;
           height:60px;
           border-radius:100%; 
           background-color: #191a21;
           /* padding-top:18px;
           padding-left:14px; */
           position: relative;
           display:flex;
           justify-content:center;
           align-items:center;
           cursor: pointer;
          
           &:hover >.ic{
            transform:translateY(-46px);
             color: #191a21;
           }
           &:hover .candado{
            transform:translateY(-46px);
             color: #191a21;
           }
           &:hover .happy{
             transform:translateY(-46px);
             color: #191a21;
           }
           .ic{
             transition:.4s all;
           }
           i{
             font-size:26px;
             color:#fff;
             position: absolute;
             transition:.4s all;
           }
         
           .candado{
             position: relative;
             transition:.4s all;
           }
           .happy{
            position: relative;
             transition:.4s all;
           }
          
         }
       }
       .titulo{
         font-size:18px;
         margin-bottom:4px;
       }
       .skill{
           font-size:14px;
           margin:5px 0;
       }
   
   }
   .sub2{
     display:flex;
     align-items:center;
     

   }
   .titulo-social{
     width:100%;
   }
   .nombre-red{
    font-size:14px;
    margin:2px 0;

   }
   .linke,.git,.what{
     margin-left:6px;
     cursor: pointer;
     font-size:15px;
     position: relative;
   }
   .linke{
    color:#0e76a8;
   }
   .what{
    color:#00bb2d; 
   right:4px;
   }
   .c2{
     position: relative;
     overflow:hidden;
    
     &:hover >.sombra{
       top:100%;
     }
     >.sombra{
       position:absolute;
       top:0;
       left:0;
       width:100%;
       height:100%;
       background-color:rgba(0,0,0,.4);
        border-radius:100%; 
       transition:.4s all;
       
     }
   }
   .subr{
     text-align:end;
    
   }
`;

const styles = { General, ContFoto,Perfil };

export default styles;
