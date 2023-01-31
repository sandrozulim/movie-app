import { FaSpinner } from "react-icons/fa";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner">
      <FaSpinner className="spinner__icon" />
    </div>
  );
}

export default Spinner;
