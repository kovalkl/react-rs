import { useNavigate } from 'react-router-dom';

import Button from '@/components/UI/button/Button';
import '@/views/notFound/notFound.sass';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="accent-text center-text">Oops! Page Not Found!</div>
      <Button onClick={() => navigate('/?page=1')}>Back to Home</Button>
    </div>
  );
};

export default NotFound;
