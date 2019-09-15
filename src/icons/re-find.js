import React from 'react';
import PropTypes from 'prop-types';

const ReFind = (props) => {
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
        d="M12.17 20a6.85 6.85 0 0 1-2.2-.36.9.9 0 0 1-.55-1.11.82.82 0 0 1 1-.58 5.46 5.46 0 0 0 1.71.27.89.89 0 0 1 0 1.78z"
        fill={color}
      />
      <path
        d="M15.25 19.18a.83.83 0 0 1-.74-.47.92.92 0 0 1 .35-1.2 5.76 5.76 0 0 0 1.4-1.11.79.79 0 0 1 1.17 0 .93.93 0 0 1 0 1.26 7.51 7.51 0 0 1-1.8 1.43.75.75 0 0 1-.38.09z"
        fill={color}
      />
      <path
        d="M7.49 17.93a.8.8 0 0 1-.59-.26 8.09 8.09 0 0 1-1.33-1.93.93.93 0 0 1 .34-1.2.8.8 0 0 1 1.09.37 6.58 6.58 0 0 0 1 1.5.94.94 0 0 1 0 1.26.84.84 0 0 1-.51.26z"
        fill={color}
      />
      <path
        d="M18.49 15a.69.69 0 0 1-.25 0 .89.89 0 0 1-.54-1.11A6.78 6.78 0 0 0 18 12a.89.89 0 0 1 .82-.92.84.84 0 0 1 .83.86V12a8.66 8.66 0 0 1-.33 2.38.84.84 0 0 1-.83.62z"
        fill={color}
      />
      <path
        d="M18 9.54a.83.83 0 0 1-.73-.47 6 6 0 0 0-1-1.5.94.94 0 0 1 0-1.26.79.79 0 0 1 1.17 0 7.84 7.84 0 0 1 1.34 1.93.91.91 0 0 1-.34 1.2.77.77 0 0 1-.44.1z"
        fill={color}
      />
      <path
        d="M7.45 7.89a.8.8 0 0 1-.58-.26.94.94 0 0 1 0-1.26 8 8 0 0 1 1.8-1.44.81.81 0 0 1 1.12.37.93.93 0 0 1-.34 1.2A6.05 6.05 0 0 0 8 7.62a.78.78 0 0 1-.55.27z"
        fill={color}
      />
      <path
        d="M14.09 6.09a1 1 0 0 1-.24 0 5.43 5.43 0 0 0-1.69-.27.88.88 0 0 1-.85-.89.85.85 0 0 1 .81-.93 6.94 6.94 0 0 1 2.17.35.89.89 0 0 1 .55 1.1.83.83 0 0 1-.75.64z"
        fill={color}
      />
      <path
        d="M6 11.53a.59.59 0 0 1-.57-.53l-.31-3.59a.6.6 0 1 1 1.19-.11l.31 3.56a.62.62 0 0 1-.55.67z"
        fill={color}
      />
      <path
        d="M4.21 9.92a.61.61 0 0 1-.6-.56.62.62 0 0 1 .54-.68l3.31-.33a.6.6 0 0 1 .66.56.62.62 0 0 1-.54.68l-3.31.33z"
        fill={color}
      />
    </svg>
  );
};

ReFind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReFind.defaultProps = {
  color: '#000',
  size: '24',
};

export default ReFind;