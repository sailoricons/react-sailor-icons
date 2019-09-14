import React from 'react';
import PropTypes from 'prop-types';

const Close = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <path
        d="M4.73 20a.75.75 0 0 1-.52-.21.74.74 0 0 1 0-1L18.76 4.21a.73.73 0 0 1 1 1L5.24 19.79a.73.73 0 0 1-.51.21z"
        fill={color}
      />
      <path
        d="M19.27 20a.73.73 0 0 1-.51-.21L4.21 5.24a.73.73 0 1 1 1-1l14.58 14.52a.74.74 0 0 1 0 1 .75.75 0 0 1-.52.24z"
        fill={color}
      />
    </svg>
  );
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Close.defaultProps = {
  color: '#000',
  size: '24',
};

export default Close;
