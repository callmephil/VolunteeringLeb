import React, { Children, Fragment, cloneElement } from "react";
import { Col } from "react-bootstrap";

const augmentChild = (child, isGrid) => cloneElement(child, { isGrid, ...child.props });

const List = ({ grid, children, md=4 }) => {
  if(!Children.count(children)){
   return <span>empty</span>
  }
  const wrappedList = Children.map(children, child => {
    const augmentedChild = augmentChild(child, grid)
    if(grid){
      return <Col md={md}>{augmentedChild}</Col>
    }
    return augmentedChild
  })

  return  <Fragment>{wrappedList}</Fragment>
}

export default List