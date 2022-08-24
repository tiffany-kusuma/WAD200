import "/src/styles/search.css";
import { ReactComponent as SearchSVG } from "/src/images/search.svg";

function Search() {
  return (
    <div className="search-wrapper">
      <div className="searchwrapper">
        <div className="search">
          <SearchSVG />
          <input className="inputsearch" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Search;
