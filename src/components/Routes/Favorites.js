import { useContext, useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import Pagination from "../UI/Pagination";
import FavoritesContext from "../../context/favorites.context";
import { AiFillWarning } from "react-icons/ai";
import "./Favorites.scss";

function Favorites() {
  const [currentPage, setCurrentPage] = useState(1);
  const { favorites } = useContext(FavoritesContext);

  let favoritesContent;
  if (favorites.length > 0) {
    favoritesContent = <ItemsList items={favorites} />;
  } else {
    favoritesContent = (
      <div className="no-data-msg">
        <AiFillWarning size="4rem" />
        <span>There are no Favorites added yet</span>
      </div>
    );
  }

  return (
    <>
      {favoritesContent}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfItems={favorites.length}
      />
    </>
  );
}

export default Favorites;
