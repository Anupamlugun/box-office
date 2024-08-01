import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return actors.map(data => (
    <ActorsCard
      key={data.person.id}
      name={data.person.name}
      image={
        data.person.image ? data.person.image.medium : 'image-not-found.png'
      }
      birthday={data.person.birthday ? data.person.birthday : null}
      country={data.person.country ? data.person.country.name : null}
    />
  ));
};

export default ActorsGrid;
