import { Link, useParams } from 'react-router-dom';
import { getShowId } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from './Shows/ShowMainData';
import ShowMainDetails from './Shows/ShowMainDetails';
import Seasons from './Shows/Seasons';
import Casts from './Shows/Casts';
import styled from 'styled-components';

const Shows = () => {
  const { showId } = useParams();

  const { data: showData, error: showDataError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowId(showId),
  });

  if (showData) {
    return (
      <>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>
        <ShowPageWrapper>
          <ShowMainData
            image={showData.image}
            name={showData.name}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres}
          />
        </ShowPageWrapper>
        <InfoBlock>
          <h2>Details</h2>
          <ShowMainDetails
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Casts</h2>
          <Casts cast={showData._embedded.cast} />
        </InfoBlock>
      </>
    );
  }
  if (showDataError) {
    return <div>error</div>;
  }

  return <div>Showing {showId}</div>;
};

export default Shows;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
