import styled from "styled-components";

export const ListItemWrapper = styled.li`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 3px;
  background: rgba(255 255 255/30%);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 2px -1px #b3b1b1;
  border-radius: 4px;
  font-size: 0.9em;
`;

export const ListItemText = styled.p`
  /* for wrapping text */
  max-width: 80%;
  white-space: normal;
  word-wrap: break-word;
  position: relative;
  color:var(--text-color) ;
  :before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotateZ(180deg);
    height: 2px;
    width: ${({ anim }) => (anim ? "100%" : 0)};
    left: 0;
    background-color: red;
    border-radius: 5px;
    transition: 500ms linear;
  }
`;

export const DeleteBut = styled.div`
  height: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:var(--text-color) ;

`;
