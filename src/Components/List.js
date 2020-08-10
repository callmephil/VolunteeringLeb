import React, { Children, Fragment, cloneElement } from "react";
import { Col } from "react-bootstrap";

const augmentChild = (child, isGrid) => cloneElement(child, { isGrid, ...child.props });

const EmptyList = () => <span>Empty List</span>

const List = ({ grid, children, md=4, ifEmpty:Comp = EmptyList }) => {

  if(!Children.count(children)){
   return <Comp/>
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