import React, { Fragment } from 'react'
import InformationMessage from '../Components/InformationMessage';
import { Row } from 'react-bootstrap';
import CardNGOList from '../../../Components/Cards/CardNGO';

export default function InstitutionsTab() {
    return (
        <Fragment>
          <InformationMessage />
          <Row>
            <CardNGOList grid={true} />
          </Row>
        </Fragment>
      );
}
