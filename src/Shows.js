import { useParams } from 'react-router-dom';
const Shows = () => {
  const { showId } = useParams();
  console.log(showId);
  return <div>Showing {showId}</div>;
};

export default Shows;
