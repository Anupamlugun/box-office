import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowId } from './api/tvmaze';

const Shows = () => {
  const [showData, setShowData] = useState(null);
  const [showDataError, setShowDataError] = useState(null);
  const { showId } = useParams();
  console.log(showData);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowId(showId);
        setShowData(data);
      } catch (error) {
        setShowDataError(error);
      }
    }
    fetchData();
  }, [showId]);

  if (showData) {
    return <div>data found {showData ? showData.name : null}</div>;
  }
  if (showDataError) {
    return <div>error</div>;
  }

  return <div>Showing {showId}</div>;
};

export default Shows;
