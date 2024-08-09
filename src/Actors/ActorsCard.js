import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorsCard = ({ name, image, birthday, country }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={image}></img>
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{country ? `Comes from ${country}` : 'No counrty known'}</p>
      <p>{birthday ? `Born ${birthday}` : null}</p>
    </SearchCard>
  );
};

export default ActorsCard;
