import { DownloadOutlined } from '@ant-design/icons';
import { GridCellParams } from '@material-ui/data-grid';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import * as OccurrenceActions from '~/actions/occurrence';
import DataTable from '~/components/DataTable/DataTable';
import DataTableActions from '~/components/DataTableActions/DataTableActions';
import PanelContentHeader from '~/components/PanelContentHeader/PanelContentHeader';
import AdvancedButton from '~/components/AdvancedButton/AdvancedButton';

import { REPORT_PAGE_SIZE } from '~/config/env';
import { translate } from '~/services/i18n';
import NavigationService from '~/services/navigation';
import { useReduxState } from '~/hooks/useReduxState';

const initialValues: advancedFilterModels.OccurrenceAdvancedFilter = {
  category: '',
  problemType: '',
  profileType: '',
  orderBy: 'createdAt',
  page: 0,
  pageSize: REPORT_PAGE_SIZE,
  sort: 'desc',
};

const OccurrenceReport: React.FC = () => {
  const dispatch = useDispatch();
  const { occurrence } = useReduxState();

  const [advancedFilters, setAdvancedFilters] = useState(initialValues);
  const reportRows = occurrence.list;
  const reportTotalRows = occurrence.listCount;

  useEffect(() => {
    const filter = NavigationService.getQuery();

    onSearch({
      ...advancedFilters,
      ...filter,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = (filters: advancedFilterModels.OccurrenceAdvancedFilter) => {
    dispatch(OccurrenceActions.getOccurrenceReport(filters));
  };

  const onRemove = async (id: string) => {
    await dispatch(OccurrenceActions.removeOccurrence(id));

    const filter = NavigationService.getQuery();

    onSearch({
      ...advancedFilters,
      ...filter,
    });
  };

  return (
    <div className="occurrence">
      <div className="occurrence__panel-content">
        <Row>
          <Col lg={6}>
            <PanelContentHeader
              pageTitle={translate('PAGES.PANEL.OCCURRENCE.REPORT.PAGE_TITLE')}
              pageDescription={translate(
                'PAGES.PANEL.OCCURRENCE.REPORT.PAGE_DESCRIPTION'
              )}
            />
          </Col>
          <Col lg={6}>
            <AdvancedButton
              type="button"
              className="occurrence__advanced-button"
              text={translate('PAGES.PANEL.OCCURRENCE.REPORT.EXPORT.LABEL')}
              onClick={() => OccurrenceActions.exportOccurrence(advancedFilters)}
              endIcon={<DownloadOutlined />}
            />
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <div className="occurrence__table">
            <DataTable
              rows={reportRows}
              columns={[
                {
                  field: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.CATEGORY.FIELD'),
                  flex: 1,
                  headerName: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.CATEGORY.HEADER'),
                },
                {
                  field: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.PROBLEM_TYPE.FIELD'),
                  flex: 1,
                  headerName: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.PROBLEM_TYPE.HEADER'),
                },
                {
                  field: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.DESCRIPTION.FIELD'),
                  flex: 1,
                  headerName: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.DESCRIPTION.HEADER'),
                },
                {
                  field: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.CREATED.FIELD'),
                  flex: 1,
                  headerName: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.CREATED.HEADER'),
                  renderCell: (o: GridCellParams) => {
                    return (
                      <>
                        {DateTime.fromISO(o.value as string).toLocaleString(
                          DateTime.DATETIME_SHORT
                        )}
                      </>
                    );
                  },
                },
                {
                  align: 'center',
                  field: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.ACTIONS.FIELD'),
                  headerAlign: 'center',
                  headerName: translate('PAGES.PANEL.OCCURRENCE.REPORT.TABLE.ACTIONS.HEADER'),
                  renderCell: (o: GridCellParams) => {
                    return (
                      <DataTableActions
                        row={o.row}
                        basePath={translate('PAGES.PANEL.OCCURRENCE.ROUTE.DETAILS')}
                        onRemove={(id: string) => onRemove(id)}
                        onDetail={(id: string) => dispatch(OccurrenceActions.getOccurrenceDetail(id))}
                      />
                    );
                  },
                },
              ]}
              rowCount={reportTotalRows}
              pageSize={advancedFilters.pageSize}
              page={advancedFilters.page}
              sort={advancedFilters.sort}
              orderBy={advancedFilters.orderBy}
              onChange={(filters) => {
                const searchFilters = {
                  ...advancedFilters,
                  ...filters,
                };
                setAdvancedFilters(searchFilters);
                onSearch(searchFilters);
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OccurrenceReport;
