import React, { useState, useEffect } from "react";
import SvgMenu from "../../Assets/icons/Menu";
import "../../css/business.css";
import { logout } from "../../auth/index";
import { business_id } from "../BusinessesDashboard/Businesses";
import TableHead from "./tableHead";
import SideNavBar from "../ProductDashboard/SideNavBar";
import TableRow from "./tableRow";
import AddButton from "../ProductDashboard/AddButton";
import SideNavBar2 from "../ProductDashboard/SideNavBar2";
import { Link } from "react-router-dom";
import Tfooter from '../StocksPage/tfooter'

const StockPage = () => {
  const [showsidenavbar, setShowSideNavBar] = useState(false);
  const [addstockList, setAddStockList] = useState(false);
  const [stocklist, setStockList] = useState([]);
  const [showfullsidenavbar, setShowFullSideNavBar] = useState(false);

  const onClickMenu = () => {
    setShowSideNavBar(!showsidenavbar);
  };
  const onClickClose = () => {
    setShowSideNavBar(!showsidenavbar);
  };

  
  const onClickAdd = () => {
    setAddStockList(!addstockList);
  };
  const onHover = () => {
    setShowFullSideNavBar(!showfullsidenavbar);
  };

  return (
    <div className="stockListPage stock-body">
      {showsidenavbar ? (
        <div className="side-nav-page">
          <SideNavBar onClick={onClickClose} />
        </div>
      ) : null}
      <div className="header_grid">
        <div className="menu " onClick={onClickMenu}>
          <SvgMenu fill="#6842ff" />
        </div>
        <div className="divRight">
          <div className="ad" onClick={onClickAdd}>
              <Link to="/addstocks">
                <AddButton />
              </Link>
            </div>
          
        </div>
      </div>

      <div className="divdown">
     
        
          <div className="ad" onClick={onClickAdd}>
            <Link to="/addstocks">
              <AddButton />
            </Link>
          </div>
       </div>
      
      <div className="mobile_stockList table-div  ">
        <TableHead />
        <TableRow
          rowData={[
            { stock_id: 23342, qty: 24, total_price: 43, date: "21-09-2020" },
            { stock_id: 2332, qty: 24, total_price: 43, date: "21-09-2020" },
          ]}
          
        />
        <Tfooter/>
      </div>
      <div className="desktop-side-nav-bar">
        {!showfullsidenavbar ? (
          <SideNavBar2 onHover={onHover} />
        ) : (
          <SideNavBar onHover={onHover} />
        )}
      </div>
    </div>
  );
};

export default StockPage;
