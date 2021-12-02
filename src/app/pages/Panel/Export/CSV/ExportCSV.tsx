import { SaveOutlined, DownloadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import * as ExportActions from '~/actions/export';
import AdvancedButton from '~/components/AdvancedButton/AdvancedButton';
import AdvancedForm from '~/components/AdvancedForm/AdvancedForm';
import AdvancedDateRangePicker from '~/components/AdvancedDateRangePicker/AdvancedDateRangePicker';

import { translate } from '~/services/i18n';
import * as MessageService from '~/services/message';
import { useReduxState } from '~/hooks/useReduxState';

const formInitialValues: models.ExportCSV = {
  start: '',
  end: '',
  period: [],
};

const ExportCSV: React.FC = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formInitialValues);
  const { csv } = useReduxState().export;

  const onFormChange = (key: string, val: any) => {
    setForm((prevState: models.ExportCSV) => ({ ...prevState, [key]: val }));
  };

  const onPeriodChange = (period: Array<any>) => {
    onFormChange('period', period);
    onFormChange('start', period[0].format('YYYY-MM-DD'));
    onFormChange('end', period[1].format('YYYY-MM-DD'));
  };

  const onDownload = (url: string) => {
    const advancedLink =  document.createElement('a');
    advancedLink.href = url;
    advancedLink.target = '_blank';
    document.body.appendChild(advancedLink);
    advancedLink.click();
    document.removeChild(advancedLink);
  };

  const onFormSubmit = () => {
    const requestForm: any = {
      start: form.start,
      end: form.end,
    };

    if (!form.start) {
      return MessageService.error('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.ERROR.START');
    }

    if (!form.end) {
      return MessageService.error('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.ERROR.END');
    }

    dispatch(ExportActions.createExportCSV(requestForm));
  };

  return (
    <div className="exportcsv">
      <Row>
        <Col>
          <div className="exportcsv__details__form">
            <div className="exportcsv__details__form__title">
              <h3 className="exportcsv__details__form__title__text">
                {translate('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.TITLE')}
              </h3>
            </div>
            <AdvancedForm onSubmit={onFormSubmit}>
              <Row>
                <Col md={8}>
                  <AdvancedDateRangePicker
                    format={translate('SHARED.DATE_FORMAT')}
                    label={translate('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.PERIOD.LABEL')}
                    value={form.period}
                    onChange={(val: Array<any>) => onPeriodChange(val)}
                    placeholder={[
                      translate('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.START.LABEL'),
                      translate('PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.END.LABEL'),
                    ]}
                  />
                </Col>
              </Row>

              {csv && (
                <Row>
                  <Col md={4}>
                    <AdvancedButton
                      type="button"
                      className="exportcsv__advanced-button__download"
                      text={translate(
                        'PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.DOWNLOAD.LABEL'
                      )}
                      onClick={() => onDownload(csv)}
                      endIcon={<DownloadOutlined />}
                    />
                  </Col>
                </Row>
              )}

              <Row>
                <Col md={4}>
                  <AdvancedButton
                    type="submit"
                    className="exportcsv__advanced-button"
                    text={translate(
                      'PAGES.PANEL.EXPORT_CSV.DETAILS.FORM.SUBMIT.LABEL'
                    )}
                    endIcon={<SaveOutlined />}
                  />
                </Col>
              </Row>
            </AdvancedForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ExportCSV;
