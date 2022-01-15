import React from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';

const AdvancedInputAdornment = ({
  position = 'end',
  edge = 'end',
  icon,
  onClick,
  disabled = false,
}: any) => {
  return (
    <InputAdornment position={position}>
      <IconButton
        onClick={onClick}
        edge={edge}
        disabled={disabled}
      >
        {icon}
      </IconButton>
    </InputAdornment>
  );
};

export default AdvancedInputAdornment;