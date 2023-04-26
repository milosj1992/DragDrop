import { useDispatch } from "react-redux";
import { dragStart } from "../redux/actions";

type DragItemProps = {
  index: number;
  children: React.ReactNode;
};

const DragItem = ({ index, children }: DragItemProps) => {
  const dispatch = useDispatch();


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dispatch(dragStart(index))
  };

  return (
    <div draggable onDragStart={(e) => handleDragStart(e, index)}>{children}</div>
  )
}

export default DragItem;
