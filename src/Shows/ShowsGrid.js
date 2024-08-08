import { useReducer } from 'react';
import ShowsCard from './ShowsCard';
import Starredlist from '../Starredlist';

const Starredfn = (currentstate, action) => {
  switch (action.type) {
    case 'STAR':
      return currentstate.concat(action.showId);
    case 'UNSTAR':
      return currentstate.filter(showId => showId !== action.showId);

    default:
      return currentstate;
  }
};

const ShowsGrid = ({ shows }) => {
  const StarredShows = Starredlist();
  const [state, dispatch] = useReducer(
    Starredfn,
    StarredShows ? StarredShows : []
  );

  localStorage.setItem('starredshow', `[${state}]`);

  function onStarred(id) {
    const isStarred = state.includes(id);
    if (isStarred) {
      dispatch({ type: 'UNSTAR', showId: id });
    } else {
      dispatch({ type: 'STAR', showId: id });
    }
  }

  return shows.map(data => (
    <ShowsCard
      key={data.show.id}
      id={data.show.id}
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : 'image-not-found.png'}
      summary={data.show.summary}
      onStarred={onStarred}
      isStarred={state.includes(data.show.id)}
    />
  ));
};

export default ShowsGrid;
