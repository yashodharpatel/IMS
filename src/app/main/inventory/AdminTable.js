import React from "react";
import Table from "../analytic/Table";
import "./inventory.css";

const AdminTable = () => {
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
        <Table />
      </div>
    </div>
  );
};

export default AdminTable;
