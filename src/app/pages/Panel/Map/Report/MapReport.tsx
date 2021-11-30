import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import * as MapActions from '~/actions/map';
import AdvancedFilters from '~/components/AdvancedFilters/AdvancedFilters';
import AdvancedMap from '~/components/AdvancedMap/AdvancedMap';
import PanelContentHeader from '~/components/PanelContentHeader/PanelContentHeader';

import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '~/config/env';
import { translate } from '~/services/i18n';
import { useReduxState } from '~/hooks/useReduxState';

const initialValues: advancedFilterModels.MapAdvancedFilter = {
  latitude: DEFAULT_LATITUDE,
  longitude: DEFAULT_LONGITUDE,
  distance: 0,
};

const geoPositionInitialValues: models.GeoPosition = {
  latitude: DEFAULT_LATITUDE,
  longitude: DEFAULT_LONGITUDE,
};

const MapReport: React.FC = () => {
  const dispatch = useDispatch();
  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const [currentPosition, setCurrentPosition] = useState(geoPositionInitialValues);
  const { map } = useReduxState();

  const onSearch = (filters: advancedFilterModels.MapAdvancedFilter) => {
    dispatch(MapActions.getMapMarkers(filters));
    setCurrentPosition({ latitude: filters.latitude, longitude: filters.longitude });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setAdvancedFilters({ 
          ...advancedFilters,
          latitude, 
          longitude,
        });

        setCurrentPosition({ latitude, longitude });
      },
      (_ignored) => {
        //
      },
      { timeout: 30000 },
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onSearch(advancedFilters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="map">
      <div className="map__advanced-filters">
        <AdvancedFilters
          onFilter={() => onSearch(advancedFilters)}
          cols={[3, 3, 3]}
          fields={[
            {
              label: translate(
                'PAGES.PANEL.MAP.REPORT.ADVANCED_FILTER.LATITUDE'
              ),
              onChange: (latitude: number) => {
                setAdvancedFilters({
                 ...advancedFilters,
                  latitude,
                });
              },
              type: 'input',
              value: advancedFilters.latitude,
            },
            {
              label: translate(
                'PAGES.PANEL.MAP.REPORT.ADVANCED_FILTER.LONGITUDE'
              ),
              onChange: (longitude: number) => {
                setAdvancedFilters({
                 ...advancedFilters,
                 longitude,
                });
              },
              type: 'input',
              value: advancedFilters.longitude,
            },
            {
              label: translate(
                'PAGES.PANEL.MAP.REPORT.ADVANCED_FILTER.DISTANCE'
              ),
              onChange: (distance: number) => {
                setAdvancedFilters({
                 ...advancedFilters,
                 distance,
                });
              },
              type: 'input',
              value: advancedFilters.distance,
            },
          ]}
        />
      </div>

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
          latitude={currentPosition.latitude}
          longitude={currentPosition.longitude}
          markers={map.markers}
          onChange={(val: models.GeoPosition) => {
            setAdvancedFilters({
              ...advancedFilters,
              ...val,
            });
            onSearch({
              ...advancedFilters,
              ...val,
            })
          }}
        />
      </div>
    </div>
  );
};

export default MapReport;
