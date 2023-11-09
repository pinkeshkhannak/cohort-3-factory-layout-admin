import React, { useState } from "react";
import Settings from "./Settings";
import LayoutConfigurationCard from "./LayoutConfigurationCard";

function ParentComponent() {
  const [layoutName, setLayoutName] = useState("");
  const [facingDirection, setFacingDirection] = useState(null);

  const [cellState, setCellState] = useState(0);
  const [cellColumnIndex, setCellColumnIndex] = useState(0);
  const [cellRowIndex, setCellRowIndex] = useState(0);

  const handleLayoutNameChange = (e) => {
    setLayoutName(e.target.value);
  };

  const handleFacingDirectionChange = (direction) => {
    setFacingDirection(direction);
  };

  const handleCellDataChange = (cellData) => {
    setCellState(cellData.cell_state);
    setCellColumnIndex(cellData.column_index);
    setCellRowIndex(cellData.row_index);
  };

  const handleSaveLayout = () => {
   const layoutData = {
       name: layoutName,
       direction: facingDirection,
     };

     const cellData = {
       cell_state: cellState,
       column_index: cellColumnIndex,
       row_index: cellRowIndex,
     };

     const requestData = { layoutData, cellData };

     fetch("/api/layouts/save", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(requestData),
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("Layout and cells saved successfully", data);
       })
       .catch((error) => {
         console.error("Error saving layout and cells", error);
       });
  };

  return (
    <div>
      <Settings
        cellState={cellState}
            cellColumnIndex={cellColumnIndex}
            cellRowIndex={cellRowIndex}
            layoutName={layoutName}
            facingDirection={facingDirection}
            onLayoutNameChange={handleLayoutNameChange}
            onFacingDirectionChange={handleFacingDirectionChange}
            onSaveLayout={handleSaveLayout}
      />
      <LayoutConfigurationCard onCellDataChange={handleCellDataChange} />
    </div>
  );
}

export default ParentComponent;