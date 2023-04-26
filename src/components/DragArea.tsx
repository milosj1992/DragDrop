import { useDispatch, useSelector } from "react-redux";

type DragAreaProps = {
  children: React.ReactNode;
  items: any[];
  onChange: (newItems: any[]) => void;
};

import React from "react";
const DragArea = ({ children, items, onChange }: DragAreaProps) => {

  const state = useSelector((state: any) => state);

  const handleDrop = (index: string) => {
    let draggedIndex = state.dragInfo.dragItem;
    let droppedIndex = parseInt(index);
    if (draggedIndex === droppedIndex) {
      return;
    }

    const newItems = [...items];
    const temp = newItems[draggedIndex];
    newItems[draggedIndex] = newItems[droppedIndex];
    newItems[droppedIndex] = temp;

    onChange(newItems);
  };

  const onOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return (
          <div
            draggable
            onDragOver={(e) => onOver(e)}
            onDrop={(e) => handleDrop((child as React.ReactElement).key as string)}
          >
            {React.cloneElement(child as React.ReactElement)}
          </div>
        )
      })}
    </div>
  );
}
export default DragArea