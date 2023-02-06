import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import PrimaryButton from "../UI/PrimaryButton";
import ActorList from "../ActorList/ActorList";
import FavoritesContext from "../../context/favorites.context";
import ImageSlider from "../UI/ImageSlider";
import { buildApiUrl } from "../../utilities/generic.utils";
import { MdFavorite } from "react-icons/md";
import "./ItemDetails.scss";

function ItemDetails() {
  const data = useLoaderData();

  const { favorites, addFavoriteHandler, removeFavoriteHandler } =
    useContext(FavoritesContext);

  let saveButton;
  if (favorites.find((item) => item.id === data.id)) {
    saveButton = (
      <PrimaryButton
        className="item-details__btn item-details__btn-remove"
        onClick={() => removeFavoriteHandler(data.id)}
      >
        Remove from favorites
        <MdFavorite />
      </PrimaryButton>
    );
  } else {
    saveButton = (
      <PrimaryButton
        className="item-details__btn item-details__btn-save"
        onClick={() => addFavoriteHandler(data)}
      >
        Save to favorites
        <MdFavorite />
      </PrimaryButton>
    );
  }

  return (
    <>
      <article className="item-details">
        <section>
          <ImageSlider images={data.images.items} />
          <div className="item-details__summary">
            <h2 className="item-details__title">{data.title}</h2>
            {data.runtimeMins && <span>{data.runtimeMins} min</span>}
            <p>{data.plot}</p>
          </div>
        </section>
        {saveButton}
        <ActorList actors={data.actorList} />
      </article>
    </>
  );
}

export default ItemDetails;

export const itemDetailsLoader = async ({ params }) => {
  const url = buildApiUrl("Title");
  const response = await fetch(`${url}/${params.id}/images`);
  if (!response.ok) throw json({ message: "Could not fetch details data!" }, {status: 500});
  return response;
};
