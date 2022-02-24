import Template from "@/templates/index";
import Card from "@/molecules/Card/index";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/");
  const pokemon = await res.json();
  return {
    props: {
      pokemon,
    },
  };
};

const Home = ({ pokemon }) => {
  console.log("pokemon: ", pokemon);
  return (
    <Template>
      <Card />
    </Template>
  );
};

export default Home;
