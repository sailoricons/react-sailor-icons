import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
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
        d="M12 14.11a3.76 3.76 0 0 1-3.68-3.84V7.84A3.76 3.76 0 0 1 12 4a3.76 3.76 0 0 1 3.68 3.84v2.43A3.76 3.76 0 0 1 12 14.11zm0-8.64a2.3 2.3 0 0 0-2.23 2.37v2.43A2.31 2.31 0 0 0 12 12.65a2.31 2.31 0 0 0 2.23-2.38V7.84A2.3 2.3 0 0 0 12 5.47z"
        fill={color}
      />
      <path
        d="M19.27 20H4.73a.73.73 0 0 1-.73-.73V18c0-1.19 2-2.29 5.94-3.24v-.86a.73.73 0 1 1 1.45 0v1.4a.74.74 0 0 1-.57.72c-2.54.57-5 1.5-5.37 2v.51h13.82a.74.74 0 0 1 0 1.47zM5.45 17.94z"
        fill={color}
      />
      <path
        d="M19.27 20a.73.73 0 0 1-.72-.73V18c-.37-.51-2.83-1.43-5.37-2a.74.74 0 0 1-.55-.88.72.72 0 0 1 .87-.55c4.35 1 6.54 2.12 6.5 3.39v1.29a.73.73 0 0 1-.73.75zm-.7-1.95zm0-.09z"
        fill={color}
      />
    </svg>
  );
};

Profile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Profile.defaultProps = {
  color: '#000',
  size: '24',
};

export default Profile;
