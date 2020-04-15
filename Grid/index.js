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
const colSpanBuilder = (props) => {
  if (props.colSpan) return `span ${props.colSpan}`;
};
const rowSpanBuilder = (props) => {
  if (props.rowSpan) return `span ${props.rowSpan}`;
};
function Grid(props) {
  let { colSpan, rowSpan, position, width, height } = props;
  let colStart;
  let colEnd;
  if (position && Array.isArray(position)) {
    colStart = position[0] + 1;
    colEnd = position[1] && position[1] + 1;
  }
  colSpan = colSpanBuilder(props);
  rowSpan = rowSpanBuilder(props);
  return (
    <ItemDiv
      colSpan={colSpan}
      rowSpan={rowSpan}
      colStart={colStart}
      width={width}
      height={height}
      colEnd={colEnd && colEnd}
    >
      {props.children}
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
