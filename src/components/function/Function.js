import "./Function.scss";
import { FunctionType } from "../../utils/constants";
import { useEffect, useRef, useState } from "react";
import Column from "../column/Column";
import { useDrop } from "react-dnd";
import { warnToast } from "../../utils/toast";

function Function({ type }) {
  // board state
  const [board, setBoard] = useState([]);

  // board Ref
  const boardRef = useRef();
  useEffect(() => {
    boardRef.current = board;
  });

  // useDrop hook
  const [, drop] = useDrop(() => ({
    accept: "column",
    drop: (item) => onUpdateBoard(item),
  }));

  const onUpdateBoard = (column) => {
    if (!hasSameType(column) || !canUpdateBoard(column)) return;
    addColumnToBoard(column);
  };

  const hasSameType = (column) => {
    if (column.function === type) return true;
    warnToast(`Type should be a ${type}!`);
    return false;
  };

  const canUpdateBoard = (column) => {
    const isMeasure = column.function === FunctionType.measure;
    if (!columnIsExist(column) && (isMeasure || canAddDimension(column)))
      return true;
    return false;
  };

  const columnIsExist = (column) => {
    const currentBoard = [...boardRef.current];
    const isExist = currentBoard.some((item) => item.name === column.name);
    if (!isExist) return false;
    warnToast(`This column is exist!`);
    return true;
  };

  const canAddDimension = (column) => {
    const isDimension = column.function === FunctionType.dimension;
    if (!boardRef.current.length || !isDimension) return true;
    warnToast(`Should have one dimension!`);
    return false;
  };

  const addColumnToBoard = (column) => {
    setBoard((board) => [...board, column]);
  };

  const clearBoard = () => {
    setBoard([]);
  };

  return (
    <div className="function-container">
      <label className="label">
        {type === FunctionType.dimension ? "Dimension" : "Measures"}
      </label>
      <section className="box" ref={drop}>
        {board.map((column, index) => {
          return <Column data={column} key={index} />;
        })}
      </section>
      <button className="btn" onClick={clearBoard}>
        Clear
      </button>
    </div>
  );
}

export default Function;
