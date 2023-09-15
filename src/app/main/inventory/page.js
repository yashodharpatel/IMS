import React from 'react'
import AdminTable from "./AdminTable"
import UserTable from "./UserTable"

import "../style.css"

const Inventory = () => {
  const user = {"isAdmin":true};
  return (
    <div className='rightbar'>
      {user.isAdmin ? <AdminTable/> : <UserTable/> }
    </div>
  )
}

export default Inventory