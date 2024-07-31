import { useNavigate } from 'react-router-dom';

const Starred = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate('/');
  };
  return (
    <>
      <div>i am Starred</div>
      <button type="button" onClick={() => gotohome()}>
        Go to home
      </button>
    </>
  );
};

export default Starred;
