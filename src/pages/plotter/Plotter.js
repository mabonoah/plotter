import './Plotter.scss';
import Columns from "../../components/columns/Columns";

function Plotter({ setLoading }) {
  return (
    <div>
      <Columns setLoading={setLoading} />
    </div>
  );
}

export default Plotter;
