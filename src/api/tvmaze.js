export const tvmaze = async queryinput => {
  const items = await fetch(queryinput);
  const body = await items.json();
  return body;
};
export const searcForShows = input =>
  tvmaze(`https://api.tvmaze.com/search/shows?q=${input}`);
export const searcForPeople = input =>
  tvmaze(`https://api.tvmaze.com/search/people?q=${input}`);
