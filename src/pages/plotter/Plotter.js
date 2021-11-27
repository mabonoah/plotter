import './Plotter.scss';
import Sidebar from "../../components/sidebar/Sidebar";

function Plotter({ setLoading }) {
  return (
    <div>
      <Sidebar setLoading={setLoading} />
    </div>
  );
}

export default Plotter;
