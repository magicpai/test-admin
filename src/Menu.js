// in src/MyMenu.js
import * as React from 'react';
import { Menu } from 'react-admin';
import PeopleIcon from '@mui/icons-material/People';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export const MyMenu = (props) => (
    <Menu {...props}>
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/button" primaryText="MUIButton" leftIcon={<CheckBoxOutlinedIcon />}/>
    </Menu>
);