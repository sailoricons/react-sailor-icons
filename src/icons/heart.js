import React from 'react';
import PropTypes from 'prop-types';

const Heart = (props) => {
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
        d="M12 20a1 1 0 0 1-.77-.38L5.09 11.9 5 11.81l-.12-.17-.13-.17a.71.71 0 0 1-.13-.26A5.08 5.08 0 0 1 4 8.77 4.6 4.6 0 0 1 8.4 4 4.32 4.32 0 0 1 12 6a4.33 4.33 0 0 1 3.6-2A4.6 4.6 0 0 1 20 8.77a5 5 0 0 1-.09 1 4.89 4.89 0 0 1-.54 1.5.57.57 0 0 1-.11.22l-.2.28-.06.08-.11.12-6.12 7.69A1 1 0 0 1 12 20zm-5.95-9.22l6 7.47 6-7.52a3.52 3.52 0 0 0 .5-1.27 3.84 3.84 0 0 0 .07-.69 3.15 3.15 0 0 0-3-3.31 3 3 0 0 0-2.82 2.37.74.74 0 0 1-.72.55h-.15a.72.72 0 0 1-.69-.54A3 3 0 0 0 8.4 5.45a3.15 3.15 0 0 0-2.95 3.32 3.94 3.94 0 0 0 .07.69 3.56 3.56 0 0 0 .53 1.32z"
        fill={color}
      />
    </svg>
  );
};

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heart.defaultProps = {
  color: '#000',
  size: '24',
};

export default Heart;
