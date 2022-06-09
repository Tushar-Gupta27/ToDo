import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
`;

export const TextInput = styled.input`
  padding: 6px;
  font-size: 0.9em;
  flex: 3 1 auto;
  outline: none;
  border: none;
  border-bottom: dashed 3px #fdcb6e;
  color: var(--text-color);
  background-color: var(--list-body-color);
  ::placeholder {
    color: var(--text-color);
  }
`;

export const Button = styled.button`
  flex: 1 1 auto;
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
