import "./Plotter.scss";
import Columns from "../../components/columns/Columns";
import Function from "../../components/function/Function";
import { FunctionType } from "../../utils/constants";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import LineChart from "../../components/line-chart/LineChart";

function Plotter({ setLoading }) {
  // dimension state
  const [dimension, setDimension] = useState();
  // measures state
  const [measures, setMeasures] = useState();

  return (
    <div className="plotter-container">
      <DndProvider backend={HTML5Backend}>
        <Columns setLoading={setLoading} />
        <div className="plotter-content">
          <Function type={FunctionType.dimension} onChange={setDimension} />
          <Function type={FunctionType.measure} onChange={setMeasures} />
          <LineChart
            dimension={dimension}
            measures={measures}
            setLoading={setLoading}
          />
        </div>
      </DndProvider>
    </div>
  );
}

export default Plotter;
