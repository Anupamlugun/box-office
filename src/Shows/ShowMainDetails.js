const ShowMainDetails = ({ status, premiered, network }) => {
  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Premered: {premiered} {network ? `on ${network.name}` : null}
      </p>
    </div>
  );
};

export default ShowMainDetails;
