import { useState } from "react";
import AsyncSelect from "react-select/async";
import { useStore } from "../store";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const fetchData = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/get/anime`)
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

  const customNoOptions = () => {
    if (inputValue.length < 1) {
      return "Start typing to search for an Anime. Make sure the title is the same as found on MyAnimeList!";
    }
    return "This Anime wasn't found";
  };

  const set_searchquery = useStore((state) => state.set_searchquery);
  // const toggle_display_anime = useStore((state) => state.toggle_display_anime);
  const set_display_anime = useStore((state) => state.set_display_anime);

  const SubmitHandler = () => {
    if (selectedValue.value) {
      set_searchquery(selectedValue.value);
      set_display_anime(true);
    }
  };

  return (
    <div>
      <AsyncSelect
        cacheOptions
        value={selectedValue}
        getOptionLabel={(e) => e.label}
        getOptionValue={(e) => e.value}
        loadOptions={fetchData}
        onInputChange={handleInputChange}
        onChange={handleChange}
        filterOption={customFilterOption}
        noOptionsMessage={customNoOptions}
        onSubmit={SubmitHandler()}
      />
    </div>
  );
}
