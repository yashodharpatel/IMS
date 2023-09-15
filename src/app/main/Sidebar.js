"use client"
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; 
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import MenuLink from './MenuLink';
import "./style.css"

const Sidebar = () => {
  return (
    <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlinedIcon />} text="Homepage" />
          <MenuLink icon={<BarChartOutlinedIcon/>} text="Analytics" link="main/analytic"/>
          <MenuLink icon={<InventoryOutlinedIcon/>} text="Inventory" link="main/inventory" />
          <MenuLink icon={<GroupOutlinedIcon/>} text="User" link="main/user"/>
          <MenuLink icon={<MonetizationOnOutlinedIcon/>} text="Expense"/>
          <MenuLink icon={<PersonOutlineOutlinedIcon/>} text="Profile"/>
          <MenuLink icon={<ExitToAppOutlinedIcon />} text="Logout"  />
        </div>
      </div>
  )
}

export default Sidebar