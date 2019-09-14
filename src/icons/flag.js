import React from 'react';
import PropTypes from 'prop-types';

const Flag = (props) => {
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
        d="M6.71 20a.72.72 0 0 1-.71-.73V4.73A.72.72 0 0 1 6.71 4h10.57a.71.71 0 0 1 .67.49.72.72 0 0 1-.23.8L14 8.35l3.72 3.07a.75.75 0 0 1 .22.81.72.72 0 0 1-.67.49H7.41v6.54a.72.72 0 0 1-.7.74zm.7-14.55v5.82h7.88l-2.84-2.35a.75.75 0 0 1 0-1.14l2.82-2.33z"
        fill={color}
      />
    </svg>
  );
};

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flag.defaultProps = {
  color: '#000',
  size: '24',
};

export default Flag;
