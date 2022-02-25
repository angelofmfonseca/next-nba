import styled, { css } from "styled-components";
import Template from "@/templates/index";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/");
  const types = await res.json();
  return {
    props: {
      types: types.results.filter(
        (type) =>
          type.name === "fire" ||
          type.name === "water" ||
          type.name === "grass" ||
          type.name === "dragon",
      ),
    },
  };
};

const cardTypes = ["fire", "water", "grass", "dragon"];

const Home = ({ types }) => {
  return (
    <Template>
      <Wrapper>
        {cardTypes.map((cardType) => (
          <InitialCard cardType={cardType}>{cardType}</InitialCard>
        ))}
      </Wrapper>
    </Template>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const InitialCard = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  font-size: 32px;
  border-radius: 16px;
  cursor: pointer;
  ${({ cardType }) =>
    css`
      background: ${cardType === "fire" && "#e3291d"};
      background: ${cardType === "water" && "#81b9e7"};
      background: ${cardType === "grass" && "#6cc29c"};
      background: ${cardType === "dragon" && "#a94535"};
    `}
  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 1px, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, -2px, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 4px, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, -4px, 0);
    }
  }
`;

export default Home;
