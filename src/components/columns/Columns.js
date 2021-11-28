import "./Columns.scss";
import { useEffect, useState } from "react";
import { getAll } from "../../api/api";
import Column from "../column/Column";

function Columns({ setLoading }) {
  // columns state
  const [columns, setColumns] = useState([]);

  // set columns
  useEffect(() => {
    getAll("columns", successHandler, setLoading);
  }, [setLoading]);

  const successHandler = (data) => setColumns(data);
  
  return (
    <div className="columns-container">
      <h5>Columns</h5>
      {columns.map((column, index) => {
        return <Column data={column} key={index} />;
      })}
    </div>
  );
}

export default Columns;
