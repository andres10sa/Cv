import styled from "@emotion/styled";

const Header = styled.aside`
  background-color: #191a21;
  color: #fff;
  display:flex;
  padding:6px 8px;
  align-items:center;
`;
const Imagen = styled.img`
  width:20px;
  margin-right:10px;
`;
const Nav = styled.nav`
   display:flex;
   >a{
     font-size:13px;
     cursor: pointer;
     margin:0 8px;
   }
`;
const styles = {
  Header,Imagen,Nav
};
export default styles;
