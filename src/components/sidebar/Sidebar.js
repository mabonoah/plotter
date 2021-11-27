import { useState } from "react";
import "./Sidebar.scss";

function Sidebar() {
  const [columns, setColumns] = useState([
    {
      name: "Product",
      function: "dimension",
    },
    {
      name: "Year",
      function: "dimension",
    },
    {
      name: "Country",
      function: "dimension",
    },
    {
      name: "Cost",
      function: "measure",
    },
    {
      name: "Revenue",
      function: "measure",
    },
    {
      name: "Units sold",
      function: "measure",
    },
  ]);

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
