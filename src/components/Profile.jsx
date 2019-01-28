import React from 'react'

import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <img className="avatar" src="https://avatars0.githubusercontent.com/u/7128101?s=460&v=4" alt="Dan Kelly" />
      <h3 className="name-title">Dan Kelly</h3>
      <nav className="navigation">
        <a href="/#/about">About</a>
        <a href="https://blog.dankelly.me">Blog</a>
      </nav>
    </div>
  );
};

export default Profile
