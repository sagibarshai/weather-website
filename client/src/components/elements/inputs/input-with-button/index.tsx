import PrimaryButton from "../../buttons/primary";
import "./styles.css";
import { Props } from "./types";

const TextInput = ({ input, button }: Props) => {
  return (
    <div className="input-with-button-wrapper">
      <label className="input-with-button-label">{input.label}</label>
      <div className="input-with-button-input-wrapper">
        <input
          className="input-with-button-input"
          placeholder={input.placeholder}
          value={input.value}
          onChange={(event) => input.onChange(event.target.value)}
        />
        <PrimaryButton onClick={button.onClick} text={button.text} disabled={button.disabled} loading={button.loading} />
      </div>
      <span className="input-with-button-input-error">{input.error}</span>
    </div>
  );
};
export default TextInput;
