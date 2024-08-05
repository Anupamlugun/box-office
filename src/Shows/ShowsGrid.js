import { useReducer } from 'react';
import ShowsCard from './ShowsCard';

const Starredfn = (currentstate, action) => {
  switch (action.type) {
    case 'STAR':
      //localStorage.setItem(`shows${action.showId}`, `${action.showId}`);
      return currentstate.concat(action.showId);
    case 'UNSTAR':
      // localStorage.removeItem(`shows${action.showId}`);
      return currentstate.filter(showId => showId !== action.showId);

    default:
      return currentstate;
  }
};

const ShowsGrid = ({ shows }) => {
  const [state, dispatch] = useReducer(Starredfn, []);
  localStorage.setItem('starredshow', `[${state}]`);

  const onStarred = id => {
    const isStarred = state.includes(id);
    if (isStarred) {
      dispatch({ type: 'UNSTAR', showId: id });
    } else {
      dispatch({ type: 'STAR', showId: id });
    }
  };
  return shows.map(data => (
    <ShowsCard
      key={data.show.id}
      id={data.show.id}
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : 'image-not-found.png'}
      summary={data.show.summary}
      onStarred={onStarred}
    />
  ));
};

export default ShowsGrid;
