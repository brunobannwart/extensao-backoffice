import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import PanelContentTopBar from '~/components/PanelContentTopBar/PanelContentTopBar';
import PanelSidebar from '~/components/PanelSidebar/PanelSidebar';
import { getRoutes, getStackPath } from '~/config/routes';
import NotFound from '~/pages/Panel/NotFound/NotFound';

import DashboardNavigationStack from '~/pages/Panel/Dashboard/DashboardNavigationStack';
import AdminNavigationStack from '~/pages/Panel/Admin/AdminNavigationStack';
import GeographerNavigationStack from '~/pages/Panel/Geographer/GeographerNavigationStack';

const PanelNavigationStack: React.FC = () => {
  const loggedUser = useSelector(
    (state: reducers.rootReducer) => state.auth.me
  );

  return (
    <div className="panel-navigation-stack">
      <div className="panel-navigation-stack__sidebar">
        <PanelSidebar routes={getRoutes()} />
      </div>

      <div className="panel-navigation-stack__content">
        <PanelContentTopBar user={loggedUser} />

        <Switch>
          <Route path={getStackPath('DASHBOARD')}>
            <DashboardNavigationStack />
          </Route>

          <Route path={getStackPath('USER')}>
            <AdminNavigationStack />
            <GeographerNavigationStack />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PanelNavigationStack;
