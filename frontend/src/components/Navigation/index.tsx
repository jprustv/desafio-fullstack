import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Icon } from '@material-ui/core';

import HomeIcon from '../../assets/img/home.svg';
import AddIcon from '../../assets/img/add-icon.svg';
import UserIcon from '../../assets/img/user.svg';

import { NavigationContext } from '../../contexts/navigation';

const Navigation: React.FC = () => {
  const [selected, setSelected] = useState('home');

  const { enabled } = useContext(NavigationContext);

  return (
    <div
      style={{
        margin: 'auto',
        display: 'table',
      }}
    >
      <BottomNavigation
        showLabels
        value={selected}
        onChange={(e, newValue) => {
          setSelected(newValue);
        }}
        className={`navigation ${enabled ? 'enabled' : 'disabled'}`}
      >
        <BottomNavigationAction
          className="action"
          label="Home"
          icon={
            <Icon className="action-icon">
              <img src={HomeIcon} alt="" height={25} width={25} />
            </Icon>
          }
          value="home"
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          className="action"
          label="Add Book"
          icon={
            <Icon className="action-icon">
              <img src={AddIcon} alt="" height={25} width={25} />
            </Icon>
          }
          value="create"
          component={Link}
          to="/create"
        />
        <BottomNavigationAction
          disabled
          className="action"
          label="Profile"
          icon={
            <Icon className="action-icon">
              <img src={UserIcon} alt="" height={25} width={25} />
            </Icon>
          }
          value="profile"
          component={Link}
          to="/profile"
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
