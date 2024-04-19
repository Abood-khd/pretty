import React from 'react';

const Menu = () => {
  return (
    <div className="mt-4">
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#" className="text-dark">Account</a>
        </li>
        <li className="list-group-item">
          <a href="#" className="text-dark">Bookings</a>
        </li>
        <li className="list-group-item">
          <a href="#" className="text-dark">Payment methods</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;