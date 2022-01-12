export default function AnimeCard({
  id,
  name,
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
      <div className="w-full lg:max-w-full lg:flex shadow-sm">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${image_url})` }}
        ></div>
        <div className="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>

              {aired_from === aired_to ||
              aired_to === undefined ||
              aired_to === null ? (
                <div className="text-indigo-900 font-bold text-xl mb-2 mr-10">
                  {aired_from}
                </div>
              ) : (
                <div className="text-indigo-900 font-bold text-xl mb-2 mr-10">
                  {aired_from} - {aired_to}
                </div>
              )}
            </div>
            <p className="text-gray-700 text-base">
              {synopsis.match(/[^.!?]+[.!?]+/g).slice(0, 2)}
            </p>
          </div>
          <p className="font-bold" style={{ color: `${match_to_HSL(match)}` }}>
            {match}% match
          </p>
          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
}
