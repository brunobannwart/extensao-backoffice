import React from 'react';

const KPICard = ({
  icon,
  number,
  description
}: any) => (
  <div className="kpi-card">
    <div className="kpi-card__icon">
      <img
        className="kpi-card__icon__img"
        src={icon}
        alt="kpi card icon"
      />
    </div>
    <div className="kpi-card__right">
      <div className="kpi-card__right__number">
        {number}
      </div>
      <div className="kpi-card__right__description">
        {description}
      </div>
    </div>
  </div>
);

export default KPICard;
