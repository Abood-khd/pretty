import React from 'react';
import profileImage from '../../../../../public/images/OUR SERVICES3.png';

const Profile = () => {
  return (
    <div className="d-flex align-items-center mt-4">
      <div className="mr-3">
        <img src={profileImage} alt="Profile" className="rounded-circle" width="80" height="80" />
      </div>
      <div>
        <h5 className="mb-0">John Doe</h5>
        <p className="mb-0">john@example.com</p>
      </div>
    </div>
  );
};

export default Profile;