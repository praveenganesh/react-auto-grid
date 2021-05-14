# react-auto-grid

This component eases the grid handling in React.

By using this component you can change the position of the grid, can easily span grid size, no need to worry about the row, column things can easily set width and height of the layout, highly customizable grid layout.

![](https://i.ibb.co/b3mDMzH/img-gallery.png)

# Install

`$ npm i react-auto-grid`

# Example

```sh
import {Wrapper,Grid} from "react-auto-grid";

<Wrapper cols={3}>
  <Grid>
   <Child>1</Child>
  </Grid>
  ....
  ....
   <Grid>
     <Child>9</Child>
   </Grid>
</Wrapper
```

# Props

**Wrapper:**
| props | default value / use | description |
| ------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| cols | 3 (or) ["100px","200px","300px"] | specifies the number of columns in the layout / specifies the number of columns in the layout with size of each column |
| rowSize | ["100px","200px","300px"] | specifies the size of rows |
| colGap | 0px | gap between each columns |
| rowGap | 0px | gap between each rows |
| gap | 0px | gap between each rows and columns |
| width | auto | width of the wrapper |
| height | auto | height of the wrapper |

**Grid:**
| props | default value / use | description |
| -------- | ------------------- | ---------------------------------------- |
| colSpan | 1 | specifies grid to span number of columns |
| rowSpan | 1 | specifies grid to span number of rows |
| position | [1,1] | change the position of child in grid |
| width | auto | width of the grid |
| height | auto | height of the grid |

# Browser support

functions in all active browers

![](https://i.ibb.co/MVffFKj/Screen-Shot-2021-05-14-at-10-26-39-AM.png)
source from https://caniuse.com/

# Examples and usage

**simple layout**

![](https://i.ibb.co/10zm22N/simple.png)

```
<Wrapper cols={3}>
  <Grid>
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**row span**

![](https://i.ibb.co/4pQS2F6/row-span.png)

```
<Wrapper cols={3}>
 <Grid rowSpan={2}>
   <Child>1</Child/>
 </Grid>
....
  <Grid colSpan={3}>
   <Child>9</Child/>
  </Grid>
</Wrapper>
```

**colmn span**

![](https://i.ibb.co/44LSmm3/col-span.png)

```
<Wrapper cols={3}>
 <Grid colSpan={2}>
   <Child>1</Child/>
  </Grid>
....
  <Grid colSpan={3}>
   <Child>9</Child/>
  </Grid>
</Wrapper>
```

**row size**

![](https://i.ibb.co/Z8YJs6K/row-size.png)

```
<Wrapper rowSize={["100px", "200px", "300px"]} cols={3}>
  <Grid >
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**row gap**

![](https://i.ibb.co/RS5cmw9/row-gap.png)

```
<Wrapper rowGap="10px" cols={3}>
  <Grid >
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**position**

![](https://i.ibb.co/KWqRCC4/position.png)

```
<Wrapper cols={3}><Grid position={[1,1]}>
  <Grid>
   <Child>1</Child/>
  </Grid>
....
  <Grid>
   <Child>9</Child/>
  </Grid>
</Wrapper>
```

**Gap**

![](https://i.ibb.co/nR45P3Y/gap.png)

```
<Wrapper gap="10px" cols={3}>
  <Grid>
   <Child>1</Child/>
  </Grid>
...
  <Grid>
   <Child>9</Child/>
  </Grid>
</Wrapper>
```

**column start**

![](https://i.ibb.co/rxFLhjD/col-start.png)

```
<Wrapper cols={3}>
  <Grid position={[1]}>
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**column size**

![](https://i.ibb.co/mT1rB7H/col-size.png)

```
<Wrapper cols={["100px","200px","300px"]}>
  <Grid>
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**column Gap**

![](https://i.ibb.co/1RwGVSF/col-gap.png)

```
<Wrapper colGap="10px" cols={3}>
  <Grid>
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```

**column**

![](https://i.ibb.co/Qb9fjQM/cols.png)

```
<Wrapper  cols={2}>
  <Grid>
    <Child>1</Child/>
  </Grid>
....
  <Grid>
    <Child>9</Child/>
  </Grid>
</Wrapper>
```
