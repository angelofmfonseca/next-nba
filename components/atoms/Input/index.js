import React from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import * as S from "./styles";

const Input = ({ placeholder }) => {
  return (
    <S.Wrapper>
      <S.Input placeholder={placeholder} />
      <S.IconWrapper>
        <SearchIcon size={22} color="#424242" />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Input;
