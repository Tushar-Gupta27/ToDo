import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;
export const Checkbox = styled.input`
  display: none;
`;
export const Label = styled.label`
  --x: ${({ checked }) => {
    return checked ? "37px" : "4px";
  }};
  --boxshdwT: ${({ checked }) =>
    checked
      ? "2px 2px 1px 0 rgba(255 255 255/10%),-2px -2px 4px 0 rgba(0 0 0/30%)"
      : "2px 2px 2px 0 rgba(0 0 0/30%),-2px -2px 2px 0 rgba(0 0 0/10%)"};
  div {
    height: 45px;
    width: 80px;
    background: var(--list-body-color);
    border-radius: 50px;
    position: relative;
    padding: 6px;
    box-shadow: var(--boxshdwT);
    span {
      transition: 300ms ease-in-out;
      position: absolute;
      height: 38px;
      width: 38px;
      background: var(--list-body-color);
      top: 50%;
      left: 0;
      transform: translate(var(--x), -50%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text-color);
      font-size: 1.2rem;
      box-shadow: var(--boxshdwT);
    }
  }
`;
