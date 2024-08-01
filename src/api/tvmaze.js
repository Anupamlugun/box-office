const tvmaze = async queryinput => {
  const BASEURL = 'https://api.tvmaze.com';
  const items = await fetch(`${BASEURL}${queryinput}`);
  const body = await items.json();
  return body;
};
export const searcForShows = input => tvmaze(`/search/shows?q=${input}`);
export const searcForPeople = input => tvmaze(`/search/people?q=${input}`);
export const getShowId = id => tvmaze(`/shows/${id}`);
