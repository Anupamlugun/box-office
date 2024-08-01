import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
  return shows.map(data => (
    <ShowsCard
      key={data.show.id}
      id={data.show.id}
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : 'image-not-found.png'}
      summary={data.show.summary}
    />
  ));
};

export default ShowsGrid;
