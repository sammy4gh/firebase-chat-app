import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSearch}
        className={"text-coffee-dark text-2xl shadow-2xl"}
      />
    </div>
  );
};

export default Search;
