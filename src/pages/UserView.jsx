import React from 'react';
import { Outlet } from 'react-router-dom';

const UserView = () => {
  return (
    <div>
      <h1>User View</h1>
      <Outlet />
    </div>
  );
};

export default UserView;
