import { SearchBar } from '../components/Searchbar';
import '../css/Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <div className="wrapper">
          <a href="a" className="Homepage-nav">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </a>
        </div>
        <h1>MechFind</h1>
      </header>
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
      </div>
    </div>
  );
}

export default Homepage;
