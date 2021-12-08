import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ExportOutlined } from '@ant-design/icons';

import AdvancedButton from '../AdvancedButton/AdvancedButton';
import AdvancedDateRangePicker from '../AdvancedDateRangePicker/AdvancedDateRangePicker';
import { translate } from '../../services/i18n';

interface IProps {
  onExport: (params: any) => void,
}

const AdvancedExport: React.FC<IProps> = ({ 
  onExport 
}: IProps) => {
  const [period, setPeriod] = useState();

  return (
    <div className="advanced-export">
      <Row>
        <Col>
          <AdvancedDateRangePicker

          />
        </Col>
        <Col>
          <AdvancedButton
            type="button"
            text={translate('COMPONENTS.ADVANCED_EXPORT.EXPORT')}
            size="medium"
            onClick={() => onExport({})}
            endIcon={<ExportOutlined />}
          />
        </Col>
      </Row>
    </div>
  )
};

export default AdvancedExport;