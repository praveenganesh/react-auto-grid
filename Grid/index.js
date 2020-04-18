import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  ${(props) => props.colSpan && { gridColumn: props.colSpan }}
  ${(props) => props.rowSpan && { gridRow: props.rowSpan }}
  ${(props) => props.colStart && { gridColumnStart: props.colStart }}
  ${(props) => props.colEnd && { gridRowStart: props.colEnd }}
  ${(props) => props.width && { width: props.width }}
  ${(props) => props.height && { width: props.height }}
`;
const colSpanBuilder = (colSpan) => {
  if (colSpan) return `span ${colSpan}`;
};
const rowSpanBuilder = (rowSpan) => {
  if (rowSpan) return `span ${rowSpan}`;
};
function Grid({ colSpan, rowSpan, position, width, height, children }) {
  let colStart;
  let colEnd;
  if (Array.isArray(position)) {
    position = position.reverse();
    colStart = position[0] + 1;
    if (position.length == 2) {
      colEnd = position[1] + 1;
    }
  }

  return (
    <ItemDiv
      colSpan={colSpanBuilder(colSpan)}
      rowSpan={rowSpanBuilder(rowSpan)}
      colStart={colStart}
      width={width}
      height={height}
      colEnd={colEnd}
    >
      {children}
    </ItemDiv>
  );
}

Grid.defaultProps = {
  colSpan: 1,
  rowSpan: 1,
  width: "auto",
  height: "auto",
};
export default Grid;
