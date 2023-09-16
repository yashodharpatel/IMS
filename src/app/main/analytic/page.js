"use client"
import React from 'react'
// import "../style.css"
import Widget from './Widgets'
import Chart from './Chart'
import Table from './Table'
import Featured from './Featured'
import './main.scss'

const Analytic = () => {
  return (
    <div className='rightbar'>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
        </div>
    </div>
  )
}

export default Analytic