"use client"
import React, { useEffect, useState } from "react";
import Table from "../analytic/Table";
import { inventoryColumns } from "../../../../constant";
import "./inventory.css";
import axios  from "axios";

const AdminTable = () => {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getData = async () =>{
    //         try {
    //             const res = await axios.get("/api/inventory/inventories");
    //             console.log(res);
    //             // setData(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getData();
    // }, [data])
    
  return (
    <div className="admin-container">
      <div className="filters">
        <h3 for="products">Filter:</h3>
        <label class="custom-radio">
          <input type="radio" name="radio-group" value="All" />
          <span class="radio-text">All</span>
        </label>

        <label class="custom-radio">
          <input type="radio" name="radio-group" value="hardware" />
          <span class="radio-text">Hardware</span>
        </label>

        <label class="custom-radio">
          <input type="radio" name="radio-group" value="software" />
          <span class="radio-text">Software</span>
        </label>

        <label class="custom-radio">
          <input type="radio" name="radio-group" value="furniture" />
          <span class="radio-text">Furniture</span>
        </label>

        <label class="custom-radio">
          <input type="radio" name="radio-group" value="consumable" />
          <span class="radio-text">Consumable</span>
        </label>
      </div>
      <div>
        <Table item={inventoryColumns}/>
      </div>
    </div>
  );
};

export default AdminTable;
