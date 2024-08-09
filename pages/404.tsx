import { useRouter } from 'next/router';

import Button from '@/components/UI/button/Button';
import styles from '@/views/notFound/404.module.sass';

const NotFound = () => {
  const { back } = useRouter();

  return (
    <div className={styles['not-found']}>
      <div className="accent-text center-text">Oops! Page Not Found!</div>
      <Button onClick={() => back()}>Back to Home</Button>
    </div>
  );
};

export default NotFound;
