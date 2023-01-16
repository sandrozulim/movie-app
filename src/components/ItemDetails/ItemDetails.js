import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Spinner from "../UI/Spinner";
import "./ItemDetails.scss";
import { buildApiUrl } from "../../utilities/generic.utils";
import ErrorModal from "../UI/ErrorModal";

function ItemDetails() {
  const { id } = useParams();
  const itemDetailsEndpoint = buildApiUrl("Title");

  const { data, isLoading, error, setError } = useGetData(
    `${itemDetailsEndpoint}/${id}`
  );

  return (
    <>
      {isLoading && <Spinner />}

      {!error && (
        <article className="item-details">
          <figure className="item-details__image">
            <img src={data.image} alt={data.title} />
          </figure>

          <section className="item-details__about">
            <h2 className="item-details__title">{data.title}</h2>
            <p className="item-details__plot">{data.plot}</p>
          </section>
        </article>
      )}

      {error && <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>}
    </>
  );
}

export default ItemDetails;
