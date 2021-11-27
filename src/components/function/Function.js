import "./Function.scss";
import { FunctionType } from "../../utils/constants";

function Function({ type }) {
  return (
    <div className="function-container">
      <label className="label">
        {type === FunctionType.dimension ? "Dimension" : "Measures"}
      </label>
      <section className="box"></section>
      <button className="btn">Clear</button>
    </div>
  );
}

export default Function;
