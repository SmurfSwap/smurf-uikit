import React from "react";
import styled, { keyframes } from "styled-components";
import { Svg } from "../Svg";
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const SpinnerIcon = (props) => {
    return (<Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="images/egg/9.png"/>
    </Svg>);
};
const Container = styled.div `
  position: relative;
`;
const RotatingPancakeIcon = styled(SpinnerIcon) `
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;
const Spinner = ({ size = 128 }) => {
    return (<Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`}/>
    </Container>);
};
export default Spinner;
