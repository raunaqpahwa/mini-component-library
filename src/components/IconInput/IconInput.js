import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper width={width}>
      <VisuallyHidden>
        <label>{label} </label>
      </VisuallyHidden>
      <IconWrapper size={size === "large" ? 24 : 16}>
        <Icon id={icon} size={size === "large" ? 24 : 16} strokeWidth={2} />
      </IconWrapper>
      <Input type="text" placeholder={placeholder} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(props) => props.width + "px"};
  position: relative;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline-offset: 2px;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: ${(props) =>
    props.size === "large" ? 18 / 16 + "rem" : 14 / 16 + "rem"};
  padding: ${(props) => (props.size === "large" ? "8px 36px" : "4px 24px")};
  padding-top: ${(props) => (props.size === "large" ? "10px" : "6px")};
  border-bottom: 1px solid ${COLORS.black};
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    border-bottom: 2px solid ${COLORS.black};
  }

  &:hover {
    color: ${COLORS.black};
    border-bottom: 2px solid ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  color: ${COLORS.gray700};
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  margin: auto;
  pointer-events: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
