import styled from "styled-components";

export const AppWrapper = styled.div`
  --bg-color: ${({ dark }) => (dark ? "#202124" : "#ffeaa7")};
  --primary: ${({ dark }) => (dark ? "#fcdd77" : "white")};
  --text-color: ${({ dark }) => (!dark ? "black" : "white")};
  --primary-contrast: ${({ dark }) => (!dark ? "#bfc0c1" : "#fcdd77")};
  --list-body-color: ${({ dark }) => (dark ? "#2f3033" : "hsl(0,0%,97%)")};
  --boxshdw: ${({ dark }) =>
    !dark
      ? "3px 3px 5px -1px rgba(0 0 0/25%),   inset 3px 3px 5px -1px rgba(0 0 0 /25%),-3px -3px 5px -1px rgba(255 255 255 / 70%)"
      : "3px 3px 5px -1px rgba(0 0 0/25%),inset 3px 3px 5px -1px rgba(255 255 255 /30%)"};

  font-size: 1rem;
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: var(--bg-color);
  padding: 0.75em 1.2em;
  color: white;
`;

export const Title = styled.h1`
  color: var(--primary);
  font-size: 3em;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 320px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary) 0 6px, transparent 6px),
      linear-gradient(-135deg, var(--primary) 0 6px, transparent 6px);
    background-repeat: repeat-x;
    background-size: 20px;
    z-index: 10;
    transform: rotateZ(180deg);
    bottom: 0;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  gap: 25px;
  margin: 20px 0 0 0;
`;
export const EmptyStorage = styled.div`
  position: absolute;
  bottom: 15px;
  right: 350px;
  height: 40px;
  width: 40px;
  background-color: var(--list-body-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--text-color);
  box-shadow: var(--boxshdw);
`;
