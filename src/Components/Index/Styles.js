import styled from "@emotion/styled";

const General = styled.div`
  color: #fff;
  height: 100vh;
  background-color: #21222c;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  .activo {
    background: #21222c;
  }

  .item {
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

    .carpeta4 {
      color: #edb879;
    }
  }
  .subitem2{
    padding-left: 60px;
  }
`;
const Submenu = styled.div`
  display: flex;
  background: blue;
  width: 100%;
`;
const styles = {
  General,
  Main,
  Submenu,
};
export default styles;
