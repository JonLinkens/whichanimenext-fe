import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import AnimeCard from "./components/AnimeCard";
import { useStore } from "./store";

function App() {
  const [recdata, setRecdata] = useState(undefined);

  const display_anime = useStore((state) => state.display_anime);
  const searchquery = useStore((state) => state.searchquery);

  useEffect(() => {
    if (display_anime) {
      fetch(`${process.env.REACT_APP_API_URL}/recommend/${searchquery}`)
        .then((response) => response.json())
        .then((data) => setRecdata(data.anime));
    }
  }, [display_anime, searchquery]);

  return (
    <div>
      <p>whichanimenext?</p>
      {/* <SearchBar />
      {recdata && (
        <div>
          {recdata.map((rec) => (
            <AnimeCard key={rec.id} {...rec} />
          ))}
        </div>
      )} */}
      <AnimeCard id={20} name={"Naruto"} match={52.39} />
      <AnimeCard id={20} name={"Naruto"} match={52.39} />

      <AnimeCard id={20} name={"Naruto"} match={52.39} />
    </div>
  );
}

export default App;
