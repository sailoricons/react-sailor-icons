import React from 'react';
import PropTypes from 'prop-types';

const CourseDown = (props) => {
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
        d="M12 20.8a1.37 1.37 0 0 1-1.2-.8L3.46 5.83A1.85 1.85 0 0 1 3.43 4a1.81 1.81 0 0 1 1.62-.8H19a1.81 1.81 0 0 1 1.57.8 1.85 1.85 0 0 1 0 1.82L13.2 20a1.37 1.37 0 0 1-1.2.8zm-.2-1.54h-.05l.74.32zM5.05 4.8a.56.56 0 0 0-.26 0 1.31 1.31 0 0 0 .09.24L12 18.82l7.12-13.73a.55.55 0 0 0 .08-.26 1 1 0 0 0-.25 0z"
        fill={color}
      />
    </svg>
  );
};

CourseDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseDown.defaultProps = {
  color: '#000',
  size: '24',
};

export default CourseDown;
