import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 10px 20px 10px 40px;
  border-radius: 40px;
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
  top: 10px;
  left: 12px;
`;
