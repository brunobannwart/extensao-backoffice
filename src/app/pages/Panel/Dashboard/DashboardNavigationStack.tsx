import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getRouteStackPath } from '~/config/routes';
import DashboardDetails from '~/pages/Panel/Dashboard/Details/DashboardDetails';
import NotFound from '~/pages/Panel/NotFound/NotFound';
import PanelContent from '~/components/PanelContent/PanelContent';
import { translate } from '~/services/i18n';

const DashboardNavigationStack = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('DASHBOARD', 'DETAILS')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.DASHBOARD.DETAILS.TITLE')}
          pageDescription={translate(
            'PAGES.PANEL.DASHBOARD.DETAILS.PAGE_DESCRIPTION'
          )}
        >
          <DashboardDetails />
        </PanelContent>
      </Route>
      <Route path={getRouteStackPath('DASHBOARD', 'NOT_FOUND')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.DASHBOARD.NOT_FOUND.PAGE_TITLE')}
        >
          <NotFound />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default DashboardNavigationStack;
