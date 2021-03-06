import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
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
        d="M12 20a1 1 0 0 1-.8-.42C9.64 17.49 6 12.36 6 9.8A5.91 5.91 0 0 1 12 4a5.91 5.91 0 0 1 6 5.8c0 2.56-3.64 7.69-5.2 9.78a1 1 0 0 1-.8.42zm0-14.55A4.53 4.53 0 0 0 7.33 9.8c0 1.65 2.47 5.56 4.67 8.54 2.2-3 4.67-6.89 4.67-8.54A4.53 4.53 0 0 0 12 5.45zm0 6.62a2.42 2.42 0 1 1 2.44-2.42A2.43 2.43 0 0 1 12 12.07zm0-3.39a1.05 1.05 0 0 0-1.11 1 1 1 0 0 0 1.11 1 1 1 0 0 0 1.11-1 1.05 1.05 0 0 0-1.11-1z"
        fill={color}
      />
    </svg>
  );
};

Location.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Location.defaultProps = {
  color: '#000',
  size: '24',
};

export default Location;
