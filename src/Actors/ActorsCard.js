const ActorsCard = ({ name, image, birthday, country }) => {
  return (
    <div>
      <div>
        <img src={image} alt={image}></img>
      </div>
      <h1>{name}</h1>
      <p>{country ? `Comes from ${country}` : 'No counrty known'}</p>
      <p>{birthday ? `Born ${birthday}` : null}</p>
    </div>
  );
};

export default ActorsCard;
