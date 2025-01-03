import { SearchBar } from '../components/Searchbar';
import Map from '../components/Map';
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
          <div className="search-bar-container">
          <SearchBar />
        </div>
        <h1>MechFind</h1>
      </header>
      <map>
        <Map />
      </map>
    </div>
  );
}

export default Homepage;
