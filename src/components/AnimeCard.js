export default function AnimeCard({ id, name, match }) {
  return (
    <div>
      <h3>
        {id} : {name}
      </h3>
      <p>{match}% match</p>
    </div>
  );
}
