import * as S from "./styles";

const Template = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Title>PokeStore</S.Title>
      <main>{children}</main>
      <footer>
        <span>Developed by Angelo Machado Fonseca</span>
      </footer>
    </S.Wrapper>
  );
};

export default Template;
