import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressBunnyWrapper from "./ProgressBunnyWrapper";
import { ProgressBunny } from "../Svg";
const stepGuard = (step) => {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
const Progress = ({ primaryStep = 0, secondaryStep = null, showProgressBunny = false }) => {
    return (<StyledProgress>
      {showProgressBunny && (<ProgressBunnyWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressBunny />
        </ProgressBunnyWrapper>)}
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }}/>
      {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }}/> : null}
    </StyledProgress>);
};
export default Progress;
