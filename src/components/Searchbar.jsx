import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

export const SearchBar = () => {
  const [zipcode, setZipcode] = useState("");


  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input 
      placeholder="Enter your zipcode..." 
      value={zipcode} 
      onChange={(e) => setZipcode(e.target.value)}
      />
    </div>
  );
};
