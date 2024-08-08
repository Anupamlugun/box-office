import { useNavigate } from 'react-router-dom';
import Starredlist from './Starredlist';
import { getShowId } from './api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowsGrid from './Shows/ShowsGrid';

const Starred = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate('/');
  };

  const starredShows = Starredlist();

  async function fetchShowList() {
    const displaylist = await Promise.all(
      starredShows.map(async list => {
        const showlist = await getShowId(list);
        return showlist;
      })
    );

    return displaylist;
  }

  const { data: stardata, error: starerror } = useQuery({
    queryKey: ['starredShows', starredShows],
    queryFn: () =>
      fetchShowList().then(result => result.map(show => ({ show }))),
    refetchOnWindowFocus: false,
  });

  if (!starredShows) {
    return <p>there is no data</p>;
  }
  if (!stardata) {
    return <p>Fetching all Starred shows</p>;
  }

  if (starerror) {
    return <p>error in fetching: {starerror.message}</p>;
  }
  return (
    <>
      <div>i am Starred</div>
      <button type="button" onClick={() => gotohome()}>
        Go to home
      </button>
      <div>{<ShowsGrid shows={stardata} />}</div>
    </>
  );
};

export default Starred;
