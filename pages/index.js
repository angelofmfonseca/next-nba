import Template from "@/templates/index";
import Input from "@/atoms/Input";

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
      <Input placeholder="search..." />
    </Template>
  );
};

export default Home;
