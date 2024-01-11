import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Presentation>
        {displayedValue}{" "}
        <IconWrapper>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const StyledSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  appearance: none;
`;

const Presentation = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${StyledSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none;
  top: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  margin: auto;
`;
