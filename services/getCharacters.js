export const getCharacters = async () => {
  try {
    const res = await fetch(
      `http://developer.marvel.com/${process.env.API_KEY}`,
    );
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
};
