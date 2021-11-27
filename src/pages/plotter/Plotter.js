import "./Plotter.scss";
import Columns from "../../components/columns/Columns";
import Function from "../../components/function/Function";
import { FunctionType } from "../../utils/constants";

function Plotter({ setLoading }) {
  return (
    <div className="plotter-container">
      <Columns setLoading={setLoading} />
      <div className="plotter-content">
        <Function type={FunctionType.dimension} />
        <Function type={FunctionType.measure} />
      </div>
    </div>
  );
}

export default Plotter;
