export default function AnimeCard({
  id,
  name,
  url,
  image_url,
  aired_from,
  aired_to,
  synopsis,
  match,
}) {
  function match_to_HSL(match) {
    // boosting values a bit to show colours!
    return ["hsl(", match + 40, ",100%,35%)"].join("");
  }

  return (
    <div className="m-2">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-full lg:max-w-full lg:flex shadow-sm transition hover:scale-105">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>
          <div className="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex justify-between">
                <h3 className="font-lato text-gray-900 font-bold text-xl mb-2">
                  {name}
                </h3>

                {aired_from === aired_to ||
                aired_to === undefined ||
                aired_to === null ? (
                  <div className="text-blue-900 font-bold text-md mb-2 mr-10">
                    {aired_from}
                  </div>
                ) : (
                  <div className="text-blue-900 font-bold text-md mb-2 mr-10">
                    {aired_from} - {aired_to}
                  </div>
                )}
              </div>
              <p className="font-overpass text-gray-700 text-base">
                {synopsis.match(/[^.!?]+[.!?]+/g).slice(0, 2)}
              </p>
            </div>
            <p
              className="font-bold font-lato"
              style={{ color: `${match_to_HSL(match)}` }}
            >
              {match}% match
            </p>
            <div className="flex items-center"></div>
          </div>
        </div>
      </a>
    </div>
  );
}
