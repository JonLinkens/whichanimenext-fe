import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { useStore } from "./store";

function App() {
  const [recdata, setRecdata] = useState(undefined);
  const [candisplay, setCandisplay] = useState(false);

  const display_anime = useStore((state) => state.display_anime);
  const searchquery = useStore((state) => state.searchquery);

  useEffect(() => {
    if (display_anime) {
      fetch(`${process.env.REACT_APP_API_URL}/recommend/${searchquery}`)
        .then((response) => response.json())
        .then((data) => setRecdata(data.anime))
        .then(
          setTimeout(() => {
            setCandisplay(true);
          }, 1200)
        );
    }
  }, [display_anime, searchquery]);

  return (
    <div>
      <p>whichanimenext?</p>
      <SearchBar />
      {candisplay && (
        <div>
          {recdata.map((rec) => (
            <div key={rec.id}>
              <p>
                {rec.name} : {rec.match}%
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
