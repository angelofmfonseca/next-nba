import Template from "@/templates/index";

export const getStaticProps = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/players");
  const players = await res.json();
  return {
    props: {
      players: players.data,
    },
  };
};

const Home = ({ players }) => {
  console.log("players: ", players);
  return <Template>xxxx</Template>;
};

export default Home;
