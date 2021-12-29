import { useState } from "react";
import AsyncSelect from "react-select/async";
import { createFilter } from "react-select";

export default function SearchBar() {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const fetchData = () => {
    return fetch("http://localhost:8000/get/anime")
      .then((response) => response.json())
      .then((data) => data.names);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const customFilterOption = (option, rawInput) => {
    const words = rawInput.split(" ");
    return words.reduce(
      (acc, cur) =>
        acc && option.label.toLowerCase().includes(cur.toLowerCase()),
      true
    );
  };

  return (
    <div>
      <p>Search here</p>
      <AsyncSelect
        cacheOptions
        value={selectedValue}
        getOptionLabel={(e) => e.label}
        getOptionValue={(e) => e.value}
        loadOptions={fetchData}
        onInputChange={handleInputChange}
        onChange={handleChange}
        filterOption={createFilter({ ignoreAccents: false })}
      />
    </div>
  );
}
