import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translate } from '~/services/i18n';

const NotFound: React.FC = () => (
  <div className="not-found">
    <div className="not-found__inner">
      <Row className="justify-content-center">
        <Col md={12}> 
          <img
            className="not-found__inner__img"
            src="/assets/svg/ic_not_found.svg"
            alt=""
          />
          <div className="not-found__inner__text">
            {translate('PAGES.PANEL.DASHBOARD.NOT_FOUND.DESCRIPTION')}
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default NotFound;
