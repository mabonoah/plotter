import "./Column.scss";
import { useDrag } from "react-dnd";

function Column({ data }) {
  // useDrag hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "column",
    item: data,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      ref={drag}
      className="column"
      style={{ backgroundColor: isDragging ? "#F8F8FF	" : "#ffffff" }}
    >
      {data.name}
    </span>
  );
}

export default Column;
