/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const outerStyles = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const outerStyle = outerStyles[size];
  return (
    <Bar
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      aria-label="Progress Bar"
      style={outerStyle}
    >
      <InnerBarWrapper>
        <InnerBar value={value} />
      </InnerBarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Bar>
  );
};

const Bar = styled.div`
  height: var(--height);
  width: 370px;
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 4px inset ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 4px 0px 0px 4px;
`;

const InnerBarWrapper = styled.div`
  overflow: clip;
  border-radius: 4px;
  height: 100%;
`;

export default ProgressBar;
