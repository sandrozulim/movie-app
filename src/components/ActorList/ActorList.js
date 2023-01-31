import "./ActorList.scss";

function ActorList({ actors }) {
  const actorList = actors.map((actor) => {
    return (
      <li key={actor.id} className="actors-container__item">
        <span>{actor.name}</span>
        <img
          className="actors-container__img"
          src={actor.image}
          alt={actor.name}
        />
      </li>
    );
  });

  return (
    <div className="actors-container">
      <h3 className="actors-container__title">Actors</h3>
      <ul className="actors-container__list">{actorList}</ul>
    </div>
  );
}

export default ActorList;
