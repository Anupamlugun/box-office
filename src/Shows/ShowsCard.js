import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { ReadmoreStarAlign, StarIcon } from '../common/StarIcon';

const ShowsCard = ({ id, name, image, summary, onStarred, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={image}></img>
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <ReadmoreStarAlign>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <StarIcon active={isStarred} onClick={() => onStarred(id)}></StarIcon>
      </ReadmoreStarAlign>
    </SearchCard>
  );
};

export default ShowsCard;
