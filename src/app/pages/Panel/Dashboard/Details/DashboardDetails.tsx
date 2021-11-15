import React from 'react';

import PanelContentHeader from '~/components/PanelContentHeader/PanelContentHeader';

import { translate } from '~/services/i18n';
import { useReduxState } from '~/hooks/useReduxState';

const DashboardDetails: React.FC = () => {
  const { auth } = useReduxState();
  
  return (
    <div className="panel-dashboard">
      <div className="panel-dashboard__welcome">
        {translate('PAGES.PANEL.DASHBOARD.DETAILS.WELCOME')}
        {auth.me?.username}
      </div>
      <div className="panel-dashboard__title">
        <PanelContentHeader
          pageTitle={translate('PAGES.PANEL.DASHBOARD.DETAILS.TITLE')}
          pageDescription={translate(
            'PAGES.PANEL.DASHBOARD.DETAILS.PAGE_DESCRIPTION'
          )}
        />
      </div>
    </div>
  );
};

export default DashboardDetails;
