import styled from "@emotion/styled";

const General = styled.div`
  color: #fff;
  height: 100vh;
  background-color: #21222c;
  display: flex;
  flex-direction: column;
  overflow-y:auto;
  &::-webkit-scrollbar {
    display: none;
}
`;
const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Submenu = styled.div`
  display: flex;
  width: 100%;
`;
const styles = {
  General,
  Main,
  Submenu,
};
export default styles;
