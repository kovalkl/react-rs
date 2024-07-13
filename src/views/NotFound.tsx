import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/button/Button';
import './notFound.sass';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="accent-text center-text">Oops! Page Not Found!</div>;
      <Button onClick={() => navigate('/?page=1')} type="button">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
