import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px 20px 10px 10px;
  border-radius: 40px;
  border: none;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  &::-webkit-input-placeholder {
    font-size: 16px;
  }
  &::-moz-placeholder {
    font-size: 16px;
  }
  &:-ms-input-placeholder {
    font-size: 16px;
  }
  &:-moz-placeholder {
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 12px;
`;
