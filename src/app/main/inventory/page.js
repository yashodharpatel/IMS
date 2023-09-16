import React from "react";
import AdminTable from "./AdminTable";
import UserTable from "./UserTable";
import styles from "../../style";

import "../style.css";
import Link from "next/link";

const Inventory = () => {
  const user = { isAdmin: true };
  return (
    <div className="rightbar">
      {user.isAdmin ? <AdminTable /> : <UserTable />}
      <Link href="/main/inventory/add">
        <button
          type="button"
          className={`py-2 px-4 font-poppins my-4 text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles.flexCenter} ${styles.marginX}`}
        >
          Add Item
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
