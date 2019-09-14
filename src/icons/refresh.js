import React from 'react';
import PropTypes from 'prop-types';

const Refresh = (props) => {
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
        d="M12 4.73a7.28 7.28 0 0 0-6.32 3.68h.26A7 7 0 1 1 5 12h-.27A7.27 7.27 0 1 0 12 4.73z"
        fill={color}
      />
      <path
        d="M12 20a8 8 0 0 1-8-8 .73.73 0 0 1 .73-.73H5a.73.73 0 0 1 .73.73 6.34 6.34 0 1 0 .89-3.22.73.73 0 0 1-.63.36h-.31a.73.73 0 0 1-.63-1.09 8 8 0 1 1 7 12z"
        fill={color}
      />
      <path
        d="M7.6 9.55H5.05a.72.72 0 0 1-.72-.73V6.29a.73.73 0 0 1 1.45 0V8.1H7.6a.73.73 0 1 1 0 1.45z"
        fill={color}
      />
    </svg>
  );
};

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Refresh.defaultProps = {
  color: '#000',
  size: '24',
};

export default Refresh;
