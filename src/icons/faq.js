import React from 'react';
import PropTypes from 'prop-types';

const Faq = (props) => {
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
        d="M13 19.93A8 8 0 1 1 19.93 13 8 8 0 0 1 13 19.93zm.11-14.6a6.77 6.77 0 1 0 5.52 5.52 6.77 6.77 0 0 0-5.48-5.52z"
        fill={color}
      />
      <path
        d="M11 11.58a.26.26 0 0 1 .26-.26H12a1 1 0 0 0 1-1.06 1 1 0 0 0-1.09-1 1 1 0 0 0-.95 1H9.22a.08.08 0 0 1-.08-.08 2.78 2.78 0 0 1 1.66-2.57 2.87 2.87 0 1 1 2 5.35v.65a.26.26 0 0 1-.26.26h-1.31a.26.26 0 0 1-.26-.26z"
        fill={color}
      />
      <path
        d="M12.29 14.88a.76.76 0 0 1 .45.46.92.92 0 0 1-1 1.29.91.91 0 0 1-.77-.76.93.93 0 0 1 1.32-.99z"
        fill={color}
      />
    </svg>
  );
};

Faq.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Faq.defaultProps = {
  color: '#000',
  size: '24',
};

export default Faq;
