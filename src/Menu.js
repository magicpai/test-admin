// in src/MyMenu.js
import * as React from 'react';
import { Menu } from 'react-admin';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BusinessIcon from '@mui/icons-material/Business';

export const MyMenu = (props) => (
    <Menu {...props}>
        <Menu.Item to="/userProfile" primaryText="userProfile" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/userProfileId2" primaryText="userProfileId2" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/organizationProfiles" primaryText="organizationProfiles" leftIcon={<BusinessIcon />}/>
        <Menu.Item to="/asset1" primaryText="asset1" leftIcon={<Inventory2Icon />}/>
        <Menu.Item to="/asset2" primaryText="asset2" leftIcon={<Inventory2Icon />}/>
        {/* <Menu.Item to="/button" primaryText="MUIButton" leftIcon={<CheckBoxOutlinedIcon />}/> */}
    </Menu>
);