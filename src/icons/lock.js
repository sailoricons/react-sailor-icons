import React from 'react';
import PropTypes from 'prop-types';

const Lock = (props) => {
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
        d="M14.38 11a.74.74 0 0 1-.73-.74V7.08a1.63 1.63 0 0 0-1.58-1.67h-.14a1.63 1.63 0 0 0-1.58 1.67v3.1a.74.74 0 0 1-1.47 0v-3.1a3.1 3.1 0 0 1 3-3.14h.14a3.1 3.1 0 0 1 3 3.14v3.13a.74.74 0 0 1-.64.79z"
        fill={color}
      />
      <path
        d="M12 15.29a.67.67 0 0 1-.28-.06.78.78 0 0 1-.24-.16.72.72 0 0 1-.21-.52.73.73 0 0 1 .21-.52.77.77 0 0 1 1 0 1 1 0 0 1 .16.24.66.66 0 0 1 .05.28.72.72 0 0 1-.21.52.73.73 0 0 1-.48.22z"
        fill={color}
      />
      <path
        d="M12 16.08a.73.73 0 0 1-.73-.73v-.7a.73.73 0 1 1 1.46 0v.7a.73.73 0 0 1-.73.73z"
        fill={color}
      />
      <path
        d="M14.19 19.94H9.81A2.84 2.84 0 0 1 7 17.1v-4.45a2.84 2.84 0 0 1 2.81-2.84h4.38A2.84 2.84 0 0 1 17 12.64v4.46a2.84 2.84 0 0 1-2.81 2.84zm-4.38-8.85a1.55 1.55 0 0 0-1.55 1.56v4.45a1.54 1.54 0 0 0 1.55 1.55h4.38a1.54 1.54 0 0 0 1.55-1.55v-4.46a1.55 1.55 0 0 0-1.55-1.55z"
        fill={color}
      />
    </svg>
  );
};

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lock.defaultProps = {
  color: '#000',
  size: '24',
};

export default Lock;
