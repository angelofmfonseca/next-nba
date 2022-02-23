import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 40px;
  cursor: pointer;
  border-radius: 40px;
  border: none;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  background: #04aa6d;
  color: #fff;
  background-position: center;
  transition: background-color 0.8s;
  &:hover {
    background: #04ca6d radial-gradient(circle, transparent 1%, #04da6d 1%)
      center/15000%;
  }
  &:active {
    background-color: #04da6d;
    background-size: 100%;
    transition: background-color 0s;
  }
`;
