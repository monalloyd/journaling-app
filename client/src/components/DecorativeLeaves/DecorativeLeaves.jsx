import { ReactSVG } from "react-svg";
import LeavesSVG from "../../assets/images/leaves.svg";

import "./DecorativeLeaves.css";

const DecorativeLeaves = () => {
  return <ReactSVG src={LeavesSVG} className="leaves" />;
};

export default DecorativeLeaves;