import Main from './../main/Main';
import Pagination from './../pagination/Pagination';
import SearchBar from './../searchBar/SearchBar';

const Layout = () => {
  return (
    <div className="app">
      <SearchBar />
      <Pagination />
      <Main />
    </div>
  );
};

export default Layout;
