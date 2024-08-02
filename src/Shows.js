import { useParams } from 'react-router-dom';
import { getShowId } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Shows = () => {
  const { showId } = useParams();

  const { data: showData, error: showDataError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowId(showId),
  });

  if (showData) {
    return <div>data found {showData ? showData.name : null}</div>;
  }
  if (showDataError) {
    return <div>error</div>;
  }

  return <div>Showing {showId}</div>;
};

export default Shows;
