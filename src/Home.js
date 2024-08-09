import { FlexGrid } from './common/FlexGrid';

const Home = ({ renderSearch }) => {
  return (
    <>
      <FlexGrid>{renderSearch()}</FlexGrid>
    </>
  );
};

export default Home;
