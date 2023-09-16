"use client"
import React, { useState }  from 'react';
import '../style.css'
import { userColumns } from '../../../../constant';
import Table from "../analytic/Table"

const User = () => {
  return (
   <div className='rightbar'>
    <Table item={userColumns}/>
   </div>
  );
}

export default User;