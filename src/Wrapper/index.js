import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: grid;
  user-select: none;
    ${(props) => props.cols && { gridTemplateColumns: props.cols }}
    ${(props) => props.rows && { gridTemplateRows: props.rows }}
    ${(props) => props.colGap && { gridColumnGap: props.colGap }}
    ${(props) => props.rowGap && { gridRowGap: props.rowGap }}
    ${(props) => props.width && { width: props.width }}
    ${(props) => props.height && { height: props.height }}
`;

const colsBuilder = (cols) => {
  if (cols) {
    if (Array.isArray(cols)) return cols.join(" ");
    let colsArray = Array.from(new Array(cols), () => "auto");
    colsString = colsArray.join(" ");
    return colsString;
  }
};
const rowBuilder = (rowSize) => {
  if (Array.isArray(rowSize)) return rowSize.join(" ");
};
function Wrapper({
  colGap,
  rowGap,
  gap,
  width,
  height,
  rowSize,
  cols,
  children,
}) {
  return (
    <WrapperDiv
      cols={colsBuilder(cols)}
      colGap={gap || colGap}
      rowGap={gap || rowGap}
      width={width}
      height={height}
      rows={rowBuilder(rowSize)}
    >
      {children}
    </WrapperDiv>
  );
}

Wrapper.defaultProps = {
  cols: 3,
  colGap: "0px",
  rowGap: "0px",
  gap: "0px",
  width: "auto",
  height: "auto",
};
export default Wrapper;
