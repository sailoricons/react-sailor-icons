import React from 'react';
import PropTypes from 'prop-types';

const Star = (props) => {
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
        d="M16.08 20a1.45 1.45 0 0 1-.67-.17L12 18l-3.41 1.83a1.41 1.41 0 0 1-1.73-.33 1.45 1.45 0 0 1-.32-1.17l.66-4-2.79-2.87A1.45 1.45 0 0 1 5.2 9L9 8.45l1.72-3.64a1.38 1.38 0 0 1 2.52 0L15 8.45l3.8.55a1.45 1.45 0 0 1 .79 2.43l-2.79 2.88.66 4a1.45 1.45 0 0 1-.32 1.17 1.39 1.39 0 0 1-1.06.52zM5.59 10.53l3.25 3.26-.75 4.58L12 16.19l3.94 2.17-.78-4.57 3.2-3.27-4.42-.67L12 5.74l-1.94 4.11z"
        fill={color}
      />
      <polygon points="9.55 9.92 9.54 8.38 9.55 8.38 9.55 9.92" fill={color} />
    </svg>
  );
};

Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Star.defaultProps = {
  color: '#000',
  size: '24',
};

export default Star;
