import { useParams } from 'react-router-dom';
import { getShowId } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from './Shows/ShowMainData';
import ShowMainDetails from './Shows/ShowMainDetails';
import Seasons from './Shows/Seasons';
import Casts from './Shows/Casts';

const Shows = () => {
  const { showId } = useParams();

  const { data: showData, error: showDataError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowId(showId),
  });

  if (showData) {
    return (
      <>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <ShowMainDetails
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Casts</h2>
          <Casts cast={showData._embedded.cast} />
        </div>
      </>
    );
  }
  if (showDataError) {
    return <div>error</div>;
  }

  return <div>Showing {showId}</div>;
};

export default Shows;
