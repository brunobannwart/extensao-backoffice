import { LeftOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import * as OccurrenceActions from '~/actions/occurrence';

import AdvancedButton from '~/components/AdvancedButton/AdvancedButton';
import AdvancedForm from '~/components/AdvancedForm/AdvancedForm';
import AdvancedInput from '~/components/AdvancedInput/AdvancedInput';
import PanelContentBreadcrumb from '~/components/PanelContentBreadcrumb/PanelContentBreadcrumb';

import { translate } from '~/services/i18n';
import * as MessageService from '~/services/message';
import { PAGE_TYPE } from '~/enum/page';
import { getRouteStackPath } from '~/config/routes';
import { getPageType } from '~/utils/page';
import { useReduxState } from '~/hooks/useReduxState';

const formInitialValues: models.Occurrence = {
  title: '',
};

const OccurrenceDetails: React.FC = (props) => {
  const dispatch = useDispatch();
  const [pageType] = useState(getPageType());
  const [form, setForm] = useState(formInitialValues);

  const { pathname } = useLocation();
  const { occurrence } = useReduxState();

  const onFormChange = (key: string, val: any) => {
    setForm((prevState: models.Occurrence) => ({ ...prevState, [key]: val }));
  };

  useEffect(() => {
    if (occurrence && occurrence.detail) {
      setForm(occurrence.detail);
    } else {
      setForm(formInitialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [occurrence.detail]);

  useEffect(() => {
    if (pageType === PAGE_TYPE.ADD) {
      dispatch(OccurrenceActions.cleanOccurrenceDetail());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, pageType]);

  const onFormSubmit = () => {
    const requestForm: any = {
      title: form.title
    };

    if (!form.title) {
      return MessageService.error('PAGES.PANEL.OCCURRENCE.DETAILS.FORM.ERROR.TITLE');
    }

    if (pageType === PAGE_TYPE.EDIT) {
      dispatch(OccurrenceActions.updateOccurrence(occurrence?.detail?.id as string, requestForm));
    } else {
      dispatch(OccurrenceActions.addOccurrence(requestForm));
    }
  };

  return (
    <div className="occurrence">
      <Row>
        <Col>
          <PanelContentBreadcrumb
            items={[
              {
                active: true,
                title: translate('PAGES.PANEL.OCCURRENCE.REPORT.TITLE'),
                url: getRouteStackPath('TRACKING', 'OCCURRENCE_REPORT'),
              },
              {
                active: false,
                title: translate('PAGES.PANEL.OCCURRENCE.REPORT.PAGE_TITLE_DETAILS'),
              },
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="occurrence__details__form">
            <div className="occurrence__details__form__title">
              <h3 className="occurrence__details__form__title__text">
                {translate('PAGES.PANEL.OCCURRENCE.DETAILS.FORM.TITLE')}
              </h3>
            </div>
            <AdvancedForm onSubmit={onFormSubmit}>
              <Row>
                <Col md={4}>
                  <AdvancedInput
                    label={translate(
                      'PAGES.PANEL.OCCURRENCE.DETAILS.FORM.SUBJECT.LABEL'
                    )}
                    value={form.title}
                    onChange={(val: string | null) => onFormChange('title', val)}
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Link to={getRouteStackPath('TRACKING', 'OCCURRENCE_REPORT')}>
                    <AdvancedButton
                      variant="text"
                      text={translate(
                        'PAGES.PANEL.OCCURRENCE.DETAILS.FORM.BACK.LABEL'
                      )}
                      startIcon={<LeftOutlined />}
                    />
                  </Link>
                </Col>
              </Row>
            </AdvancedForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OccurrenceDetails;
