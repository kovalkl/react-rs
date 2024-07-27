import Content from './../content/Content';
import Pagination from './../pagination/Pagination';
import './main.sass';

const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper container">
        <Pagination />
        <Content />
      </div>
    </main>
  );
};

export default Main;
