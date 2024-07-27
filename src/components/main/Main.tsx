import Content from './../content/Content';
import Flyout from './../flyout/Flyout';
import Pagination from './../pagination/Pagination';
import './main.sass';

const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper container">
        <Pagination />
        <Content />
        <Flyout />
      </div>
    </main>
  );
};

export default Main;
