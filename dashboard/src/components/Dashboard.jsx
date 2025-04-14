import React, { useContext } from "react";
import {Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import GeneralContext, { GeneralContextProvider } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";
import VerifyPage from "./VerifyEmail";
const Dashboard = () => {
      
  return (
    <div className="dashboard-container">
      
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/verify/:token" element={<VerifyPage />} />

         {/*  <Route path="/buyActionWindow" element={<BuyActionWindow />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
