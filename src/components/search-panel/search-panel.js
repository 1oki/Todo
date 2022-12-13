import React from "react";

import './search-panel.css';

const SearchPanel = () => {
    return (
      <div className="search-form">
        <form className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="search-submit-btn"></input>
          <button className="btn btn-secondary" type="button" id="search-submit-btn">Search</button>
        </form>
      </div>
    )
};

export default SearchPanel;