import styled from "@emotion/styled";

const AsideContenedor = styled.aside`
  color: #fff;
  width: 50px;
  text-align: center;

  > .icon {
    color: #5b5e7a;
    font-size: 24px;
    padding: 14px 0;
    display: block;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .activo {
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const styles = {
  AsideContenedor,
};
export default styles;
