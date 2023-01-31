import { useContext } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../UI/PrimaryButton";
import ErrorModal from "../UI/ErrorModal";
import ActorList from "../ActorList/ActorList";
import Spinner from "../UI/Spinner";
import FavoritesContext from "../../context/favorites.context";
import ImageSlider from "../UI/ImageSlider";
import useGetData from "../../hooks/useGetData";
import { buildApiUrl } from "../../utilities/generic.utils";
import { MdFavorite } from "react-icons/md";
import "./ItemDetails.scss";

function ItemDetails() {
  const { id } = useParams();

  const itemDetailsEndpoint = buildApiUrl("Title");

  const { data, isLoading, error, setError } = useGetData(
    `${itemDetailsEndpoint}/${id}/images`
  );

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
      {isLoading && <Spinner />}

      {data.length !== 0 && (
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
      )}

      {error && <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>}
    </>
  );
}

export default ItemDetails;
