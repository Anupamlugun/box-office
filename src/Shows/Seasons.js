const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>
      <p>
        Episodes in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p> {season.number ? `Seasons: ${season.number}` : `Seasons: 0`}</p>
            <p>
              {season.episodeOrder
                ? `Episodes: ${season.episodeOrder}`
                : `Episodes: 0`}
            </p>

            <div>
              {season.premiereDate
                ? `Aired: ${season.premiereDate}- ${season.endDate}`
                : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
