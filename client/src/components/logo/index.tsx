import logo from "../../assets/logo.svg";
import { Props } from "./types";

const Logo = ({ width = "98px", height = "43.34px" }: Props) => {
  return <img src={logo} alt="logo" width={width} height={height} />;
};
export default Logo;
