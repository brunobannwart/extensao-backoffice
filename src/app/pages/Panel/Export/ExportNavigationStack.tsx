import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getRouteStackPath } from '@portal/config/routes';
import PanelContent from '~/components/PanelContent/PanelContent';
import { translate } from '~/services/i18n';

import ExportCSV from '~/pages/Panel/Export/CSV/ExportCSV';

const ExportNavigationStack = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('EXPORT', 'CSV')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.EXPORT_CSV.REPORT.PAGE_TITLE')}
          pageDescription={translate(
            'PAGES.PANEL.EXPORT_CSV.REPORT.PAGE_DESCRIPTION'
          )}
        >
          <ExportCSV />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default ExportNavigationStack;
