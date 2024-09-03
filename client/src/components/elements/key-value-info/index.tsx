import { Props } from "./types";
import "./styles.css";

const KeyValueInfo = ({ keyText, value, size }: Props) => {
  if (size === "l")
    return (
      <div className="key-value-info-wrapper-space">
        <p className="key-value-info-wrapper-key-l">{keyText}</p>
        <p className="key-value-info-wrapper-value-l">{value}</p>
      </div>
    );
  return (
    <div className="key-value-info-wrapper">
      <p className="key-value-info-wrapper-key-m">{keyText}</p>
      <p className="key-value-info-wrapper-value-m">{value}</p>
    </div>
  );
};

export default KeyValueInfo;
