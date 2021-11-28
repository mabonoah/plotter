import "./Plotter.scss";
import Columns from "../../components/columns/Columns";
import Function from "../../components/function/Function";
import { FunctionType } from "../../utils/constants";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Plotter({ setLoading }) {
  return (
    <div className="plotter-container">
      <DndProvider backend={HTML5Backend}>
        <Columns setLoading={setLoading} />
        <div className="plotter-content">
          <Function type={FunctionType.dimension} />
          <Function type={FunctionType.measure} />
        </div>
      </DndProvider>
    </div>
  );
}

export default Plotter;
