const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <>
      <img
        src={image ? image.original : 'image-not-found.png'}
        alt={name}
      ></img>
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:
          <div>
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMainData;
