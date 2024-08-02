const Casts = ({ cast }) => {
  return (
    <div>
      {cast.map(items => (
        <div key={items.person.id}>
          <div>
            <img
              src={
                items.person.image
                  ? items.person.image.medium
                  : 'image-not-found.png'
              }
            ></img>
          </div>
          <div>
            {items.person.name} | {items.character.name}{' '}
            {items.voice ? '| Voiceover' : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casts;
