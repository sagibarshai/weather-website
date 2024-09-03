import { Props as ButtonProps } from "../../buttons/primary/types";

export interface Props {
  input: {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
  };
  button: ButtonProps;
}
