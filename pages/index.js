import Template from "@/templates/index";

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
  return <Template>xxxxx</Template>;
};

export default Home;
