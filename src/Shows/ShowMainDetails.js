import styled from 'styled-components';
const ShowMainDetails = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>Status: {status}</p>
      <p>
        Premered: {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default ShowMainDetails;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
