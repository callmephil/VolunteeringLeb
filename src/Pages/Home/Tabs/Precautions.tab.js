import React, { Fragment } from 'react'
import InformationMessage from '../Components/InformationMessage';
import CardWikiList from '../../../Components/Cards/CardWiki';
import { Row } from 'react-bootstrap';

export default function PrecautionsTab() {
    return (
        <Fragment>
          <InformationMessage />
          <Row>
            <CardWikiList grid={true} />
          </Row>
        </Fragment>
      );
}
