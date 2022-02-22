import React from "react";
import styled from "styled-components";
import Template from "@/templates/index";

const NotFound = () => {
  return (
    <Template>
      <Wrapper>
        <Status>404</Status>
        <Message>Page not found</Message>
      </Wrapper>
    </Template>
  );
};

const Wrapper = styled.section`
  text-align: center;
`;

const Status = styled.h2`
  font-size: 32px;
`;

const Message = styled.p`
  font-size: 24px;
  font-weight: 200;
`;

export default NotFound;
