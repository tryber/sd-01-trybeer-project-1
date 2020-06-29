import React from 'react';

const Profile = (props) => {
  const { name, email } = props.index;
  return (
    <div className="ProfileAdmin-position">
      <h3 data-testid="profile-name">Nome: {name}</h3>
      <h3 data-testid="profile-email">Email: {email}</h3>
    </div>
  );
}

export default Profile;
