import React from 'react';
import PropTypes from 'prop-types';

const CourseUp = (props) => {
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
        d="M19 20.8H5a1.85 1.85 0 0 1-1.58-.8 1.85 1.85 0 0 1 0-1.82L10.8 4a1.31 1.31 0 0 1 2.4 0l7.35 14.15A1.7 1.7 0 0 1 19 20.8zM4.79 19.17a1.17 1.17 0 0 0 .25 0H19a.56.56 0 0 0 .26-.05 1.31 1.31 0 0 0-.09-.24L12 5.18 4.87 18.91a.55.55 0 0 0-.08.26zm6.72-14.78l.69.36a.11.11 0 0 0 .05 0z"
        fill={color}
      />
    </svg>
  );
};

CourseUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseUp.defaultProps = {
  color: '#000',
  size: '24',
};

export default CourseUp;
