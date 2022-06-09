import styled from "styled-components";

export const NotiWrapper = styled.div`
  width: clamp(150px, max-content, 250px);
  height: 75px;
  background-color: var(--list-body-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: show 3s ease-in-out 1;
  position: absolute;
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-color);
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 1.2em;
  box-shadow: 3px 3px 5px -1px rgba(0 0 0/25%);
  border-left: 6px solid #fad661;
  border-right: 6px solid #fad661;
  @keyframes show {
    0%,
    100% {
      top: -80px;
    }
    20%,
    84% {
      top: 22px;
    }
    25%,
    80% {
      top: 10px;
    }
  }
`;

export const Text = styled.div`
  font-size: 1em;
`;
