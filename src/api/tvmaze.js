export const tvmaze = async input => {
  const items = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
  const body = await items.json();
  return body;
};
