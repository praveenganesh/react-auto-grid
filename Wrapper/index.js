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

const colsBuilder = (props) => {
  let { cols } = props;
  if (cols) {
    if (Array.isArray(cols)) return cols.join(" ");
    cols = Array.from(new Array(cols), () => "auto");
    cols = cols.join(" ");
    return cols;
  }
};
const rowBuilder = (props) => {
  if (props.rowSize && Array.isArray(props.rowSize))
    return props.rowSize.join(" ");
};
function Wrapper(props) {
  let { colGap, rowGap, gap, width, height } = props;
  let cols = colsBuilder(props);
  let rowSize = rowBuilder(props);
  if (gap && gap !== "") {
    colGap = gap;
    rowGap = gap;
  }

  return (
    <WrapperDiv
      cols={cols}
      colGap={colGap}
      rowGap={rowGap}
      width={width}
      height={height}
      rows={rowSize}
    >
      {props.children}
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
