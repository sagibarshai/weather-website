import { Props } from "./types";
import "./styles.css";
import Loader from "../../../loaders/primary";

const PrimaryButton = ({ onClick, disabled, text, loading }: Props) => {
  return (
    <button className="primary-button" onClick={onClick} disabled={disabled}>
      {loading ? <Loader /> : text}
    </button>
  );
};
export default PrimaryButton;
