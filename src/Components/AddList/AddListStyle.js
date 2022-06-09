import styled from "styled-components";

export const AddWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  padding: 8px 15px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background: var(--list-body-color);
  border-radius: 12px;
  box-shadow: 6px 6px 8px -1px rgba(0 0 0 / 20%),
    inset 6px 6px 8px -1px rgba(0 0 0 / 20%);
  /* box-shadow: ${({ dark }) =>
    dark
      ? "6px 6px 8px -1px rgba(0 0 0 / 20%),inset 6px 6px 8px -1px rgba(0 0 0 / 20%),  inset -6px -6px 8px -1px rgba(255 255 255 / 75%)"
      : "6px 6px 8px -1px rgba(0 0 0 / 20%),inset 6px 6px 8px -1px rgba(0 0 0 / 20%),  inset -6px -6px 8px -1px rgba(255 255 255 / 75%)"}; */
  animation: ${({ anim }) => (anim ? "shake 600ms linear 1" : null)};

  @keyframes shake {
    0%,
    40%,
    80% {
      transform: translateX(-5px);
    }
    20%,
    60%,
    100% {
      transform: translateX(5px);
    }
  }
  span {
    position: absolute;
    height: 3px;
    width: 0;
    background-color: #fcd044;
    bottom: 8px;
    left: 82px;
    border-radius: 4px;
    transition: 500ms ease-in-out;
  }
`;

export const AddInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 4px 8px;
  margin: 0 10px;
  position: relative;
  font-size: 0.8em;
  :focus + span {
    width: 160px;
  }
  color: var(--text-color);
  background-color: var(--list-body-color);
  ::placeholder {
    color: var(--text-color);
  }
`;

export const AddSubmit = styled.button`
  padding: 5px 12px;
  background: none;
  /* border: 1px solid black; */
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  background: #ffe180;
  box-shadow: 3px 3px 4px -1px rgba(0 0 0 / 20%),
    inset 3px 3px 5px -1px rgba(0 0 0 / 20%);
  transition: 200ms linear;
  :hover {
    transform: scale(1.02) translateX(3px);
  }
`;

export const AddLabel = styled.label`
  color: var(--text-color);
  font-size: 0.9em;
  margin: 0 5px;
`;
