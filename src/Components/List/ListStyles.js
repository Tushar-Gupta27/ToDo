import styled from "styled-components";

export const ListBody = styled.div`
  background: var(--list-body-color);
  border-radius: 12px;
  padding: 15px;
  width: 280px;
  color: black;
  height: 500px;
  position: relative;
  background-image: radial-gradient(
    var(--primary-contrast) 0 2px,
    transparent 2px
  );
  background-size: 25px 25px;
  box-shadow: 3px 3px 5px -1px rgba(0 0 0/25%);
`;
export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  h1 {
    /* width: 50%; */
    /* color: var(--text-color); */
    text-align: center;
    background-color: #fcdd77;
    padding: 8px 15px;
    border-radius: 20% 5% 20% 5%/15% 20% 30% 20%;
  }
`;
export const ItemsWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0 5px;
`;
export const ListDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 50%;
  font-size: 1.5em;
  position: absolute;
  bottom: 10px;
  right: 15px;
  padding: 3px;
  background: var(--list-body-color);
  color: var(--text-color);
  box-shadow: var(--boxshdw);
`;
export const ListEdit = styled.div``;
