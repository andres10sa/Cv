import styled from '@emotion/styled';

const Section=styled.section`
  color:#fff;
  width:100%;
  overflow-y:auto;
  &::-webkit-scrollbar {
    display: none;
}


 .header-section{
  display:flex;
  width:100%;
  margin-bottom:20px;
 }
  .openItem{
    display:flex;
    justify-content:space-between;
    height:26px;
    width:150px;
    align-items:center;
    cursor: pointer;
    background:#191a21;
    border-top:1px solid transparent;
    border-right:1px solid #000; 
    
  }
  .currentItem{
    background-color: #21222c;
    /* border-top:1px solid #fff */
  }
  .csscont{
    background:#fff;
    height:8px;
    width:8px;
    position: absolute;
    top:3px;
    left:1px;
    border-radius:100%;
    z-index:1;

  }
  .css{
    color:rgb(41, 101, 241);
    position: relative;
    z-index:900000000000000;
    font-size:13px;
    top:2px;
  }
  .nombre{
   font-size:14px;
   display:flex;
   align-items:center;
   width:85%;
   padding-left:10px;
   padding-bottom:1px;
  }
  .openicon{
    font-size:10px;
    color:#fcce63;
    margin-right:6px;
    font-size:10px;
    position: relative;
  }
  .cerrar{
    width:10%;
    height:100%;
    text-align:center;
    padding-right:3px;
    padding-top:3px;
    padding-bottom:1px;
  
  }

`;

const styles={
    Section
}
export default styles;