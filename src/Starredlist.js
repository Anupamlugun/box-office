const Starredlist = () => {
  const localStrgStarred = localStorage.getItem('starredshow');
  const arrlocalStrgStarred = JSON.parse(localStrgStarred);
  return arrlocalStrgStarred;
};
export default Starredlist;
