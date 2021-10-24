import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import AdvancedMap from '~/components/AdvancedMap/AdvancedMap';
import PanelContentHeader from '~/components/PanelContentHeader/PanelContentHeader';

import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/env';
import { translate } from '~/services/i18n';

const initialValues: advancedFilterModels.MapAdvancedFilter = {
  latitude: DEFAULT_LATITUDE,
  longitude: DEFAULT_LONGITUDE,
};

const MapReport: React.FC = () => {
  const [location, setLocation] = useState(initialValues);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation({ latitude, longitude });
      },
      (err) => {
        setLocation({ latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE });
      },
      { timeout: 30000 },
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="map">
      <div className="map__panel-content">
        <Row>
          <Col lg={6}>
            <PanelContentHeader
              pageTitle={translate('PAGES.PANEL.MAP.REPORT.PAGE_TITLE')}
            />
          </Col>
        </Row>
      </div>
      <div className="map__markers">
        <AdvancedMap
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
    </div>
  );
};

export default MapReport;
