import React from 'react';
import PropTypes from 'prop-types';

const Profiles = (props) => {
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
        d="M15.09 14.11a3.74 3.74 0 0 1-3.64-3.84V7.84A3.74 3.74 0 0 1 15.09 4a3.74 3.74 0 0 1 3.64 3.84v2.43a3.74 3.74 0 0 1-3.64 3.84zm0-8.64a2.29 2.29 0 0 0-2.2 2.37v2.43a2.3 2.3 0 0 0 2.2 2.38 2.3 2.3 0 0 0 2.2-2.38V7.84a2.29 2.29 0 0 0-2.2-2.37z"
        fill={color}
      />
      <path
        d="M22.28 20H7.9a.73.73 0 0 1-.72-.73V18c0-1.19 1.93-2.29 5.87-3.24v-.86a.72.72 0 1 1 1.44 0v1.4a.74.74 0 0 1-.56.72c-2.52.57-4.95 1.5-5.31 2v.51h13.66a.74.74 0 0 1 0 1.47zM8.62 17.94z"
        fill={color}
      />
      <path
        d="M22.28 20a.73.73 0 0 1-.72-.73V18c-.36-.51-2.8-1.43-5.31-2a.74.74 0 0 1-.54-.88.72.72 0 0 1 .86-.55c4.31 1 6.43 2.14 6.43 3.43v1.29a.73.73 0 0 1-.72.71zm-.7-1.95zm0-.09z"
        fill={color}
      />
      <path
        d="M7.53 14a3.49 3.49 0 0 1-3.39-3.58v-2.3a3.49 3.49 0 0 1 3.39-3.58 3.49 3.49 0 0 1 3.39 3.58v2.26A3.49 3.49 0 0 1 7.53 14zm0-8a2.14 2.14 0 0 0-2 2.21v2.26a2.14 2.14 0 0 0 2.05 2.21 2.14 2.14 0 0 0 2.05-2.21V8.12a2.14 2.14 0 0 0-2.1-2.21z"
        fill={color}
      />
      <path
        d="M1.61 20a.68.68 0 0 1-.61-.73V18c0-1.19 1.64-2.29 5-3.24v-.86a.69.69 0 0 1 .61-.74.68.68 0 0 1 .61.74v1.4a.72.72 0 0 1-.52.7c-2.12.57-4.18 1.5-4.48 2v1.25s.05.75-.61.75zm.61-2.06z"
        fill={color}
      />
      <path
        d="M9.26 14.59a.69.69 0 0 0-.85.56.74.74 0 0 0 .14.62h.81a15.24 15.24 0 0 1 1.91-.66c-.61-.18-1.27-.35-2.01-.52z"
        fill={color}
      />
    </svg>
  );
};

Profiles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Profiles.defaultProps = {
  color: '#000',
  size: '24',
};

export default Profiles;
