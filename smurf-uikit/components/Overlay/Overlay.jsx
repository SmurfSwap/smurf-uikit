import styled from "styled-components";
const Overlay = styled.div.attrs({ role: "presentation" }) `
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #452a7a;
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.6 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
export default Overlay;
