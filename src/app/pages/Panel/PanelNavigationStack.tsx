import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import PanelContentTopBar from '~/components/PanelContentTopBar/PanelContentTopBar';
import PanelSidebar from '~/components/PanelSidebar/PanelSidebar';
import { getRoutes, getStackPath, getRouteStackPath } from '~/config/routes';

import DashboardNavigationStack from '~/pages/Panel/Dashboard/DashboardNavigationStack';
import CategoryNavigationStack from '~/pages/Panel/Category/CategoryNavigationStack';
import OccurrenceNavigationStack from '~/pages/Panel/Occurrence/OccurrenceNavigationStack';
import MapNavigationStack from '~/pages/Panel/Map/MapNavigationStack';
import ProfileNavigationStack from '~/pages/Panel/Profile/ProfileNavigationStack';
import ChangePasswordNavigationStack from '@portal/pages/Panel/ChangePassword/ChangePasswordNavigationStack';
import UserNavigationStack from '~/pages/Panel/User/UserNavigationStack';

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
            <UserNavigationStack />
          </Route>

          <Route path={getStackPath('TRACKING')}>
            <CategoryNavigationStack />
            <OccurrenceNavigationStack />
            <MapNavigationStack />
            <ProfileNavigationStack />
          </Route>

          <Route path={getStackPath('SETTINGS')}>
            <ChangePasswordNavigationStack />
          </Route>

          <Redirect from="*" to={getRouteStackPath('DASHBOARD', 'NOT_FOUND')} />
        </Switch>
      </div>
    </div>
  );
};

export default PanelNavigationStack;
