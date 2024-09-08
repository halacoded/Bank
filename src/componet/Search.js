import React from "react";

export const Search = ({ setQuery }) => {
  const handelSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      {" "}
      <div className="input-group rounded flex">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handelSearch}
        />
      </div>
    </div>
  );
};
