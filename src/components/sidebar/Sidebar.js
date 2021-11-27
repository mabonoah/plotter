import "./Sidebar.scss";
import { useEffect, useState } from "react";
import { getAll } from "../../api/api";

function Sidebar() {
  // columns state
  const [columns, setColumns] = useState([]);
  // set columns
  useEffect(() => {
    getAll("columns", setColumns);
  }, []);

  return (
    <div className="sidebar-container">
      <h5>Columns</h5>
      {columns.map((column, index) => {
        return (
          <span className="column" key={index}>
            {column.name}
          </span>
        );
      })}
    </div>
  );
}

export default Sidebar;
