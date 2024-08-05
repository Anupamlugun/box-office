const ShowsCard = ({ id, name, image, summary, onStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={image}></img>
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button" onClick={() => onStarred(id)}>
          Star me
        </button>
      </div>
    </div>
  );
};

export default ShowsCard;
