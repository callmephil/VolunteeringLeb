import React, { Children, Fragment, cloneElement } from "react";
import { Col, Row } from "react-bootstrap";

const augmentChild = (child, isGrid) => cloneElement(child, { isGrid, ...child.props });

const EmptyList = () => <span>Empty List</span>;

const List = ({
  grid,
  children,
  sizes = { sm: 0, md: 0, lg: 0, xl: 0 },
  ifEmpty: Comp = EmptyList,
}) => {
  if (!Children.count(children)) {
    return <Comp />;
  }

  const wrappedList = Children.map(children, (child) => {
    const augmentedChild = augmentChild(child, grid);
    if (grid) {
      return (
        <Col sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl}>
          {augmentedChild}
        </Col>
      );
    }
    return augmentedChild;
  });

  if (grid) {
    return (
      <Fragment>
        <Row> {wrappedList} </Row>
      </Fragment>
    );
  } else return <Fragment> {wrappedList} </Fragment>;
};

export default List;
