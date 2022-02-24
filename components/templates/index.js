import * as S from "./styles";
import Input from "@/atoms/Input";

const Template = ({ children }) => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Title>PokeStore</S.Title>
        <Input placeholder="search..." />
      </S.TopWrapper>
      <main>{children}</main>
      <footer>
        <span>Developed by Angelo Machado Fonseca</span>
      </footer>
    </S.Wrapper>
  );
};

export default Template;
