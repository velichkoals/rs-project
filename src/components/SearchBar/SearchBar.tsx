import "./SearchBar.css";
import React, { useEffect, useState } from "react";

interface IProps {
  handleSearch: (data: string) => void;
}

const SearchBar = function (props: IProps) {
  const [search, setSearch] = useState<string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.handleSearch(search || "");
    }
  };

  useEffect(() => {
    setSearch(localStorage.getItem("toRestoreValue"));
  }, []);
  useEffect(() => {
    return function setValue() {
      localStorage.setItem("toRestoreValue", search || "");
    };
  });

  return (
    <div>
      <input
        className="searchBar"
        placeholder="Search character"
        type="text"
        name="search"
        data-testid="searchBar"
        value={search || ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
