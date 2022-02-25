import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);
  text-align: center;
  border-radius: 16px;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  background: #eaeaea;
  border-radius: 16px 16px 0 0;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  border-radius: 0 0 16px 16px;
`;
