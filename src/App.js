import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import AnimeCard from "./components/AnimeCard";
import Footer from "./components/Footer";
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
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{ backgroundImage: "url('manga_collage8.png')" }}
    >
      <div className="pt-5">
        <div className=" justify-center max-w-screen-lg mx-auto px-2">
          <div className="text-center mb-4 select-none">
            <h1
              className="font-slenco text-4xl md:text-5xl 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 to-sky-400
            "
            >
              whichanimenext?
            </h1>
          </div>

          <SearchBar className="min-w-full " />
          {recdata === -1 ? (
            <p>This anime could not be found for some reason.</p>
          ) : (
            [
              recdata && (
                <div className="m-10 " key={1}>
                  <div className=" flex flex-wrap justify-center">
                    {recdata.map((rec) => (
                      <AnimeCard key={rec.id} {...rec} />
                    ))}
                  </div>
                </div>
              ),
            ]
          )}
        </div>
      </div>
      {recdata ? (
        <Footer />
      ) : (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
