import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/Logo.svg"
import MenuItem from "../MenuItem/MenuItem.jsx"
import AIAssistant from "../../assets/AI Assistant.svg"
import ChurnManagement from "../../assets/Churn Management.svg"
import Subscribers from "../../assets/Subscribers.svg"
import PlanManagement from "../../assets/Plan Management.svg"
import Invoices from "../../assets/Invoices.svg"
import Dashboard from "../../assets/Dashboard.svg"
import Needhelp from "../../assets/Need help.svg"
import Settings from "../../assets/Settings.svg"
import Sani from "../../assets/Sani.svg"
function SideBar() {
  return (
   <div className="side-bar">
    <img className="autosub-logo" src={Logo}/>


    <div className="menu">

    
    <MenuItem  src={Dashboard} text={"Dashboard"}/>
    <MenuItem  src={PlanManagement} text={"Plan Management"}/>
    <MenuItem  src={ChurnManagement} text={"Churn Management"}/>    
    <MenuItem  src={Invoices} text={"Invoices"}/>
    <MenuItem  src={Subscribers} text={"Subscribers"}/>
    <MenuItem src={AIAssistant} text={"AI Assistant"} style={{backgroundColor:"rgba(88, 159, 215, 0.3)"}}/>
    </div>

    <div className="account"> 

  
    <MenuItem src={Needhelp} text={"Need help?"}/>
    <MenuItem src={Settings} text={"Settings"}/>
    <MenuItem src={Sani} text={"Sani"}/>
    </div>

    
  

   </div>
     

  );
}

export default SideBar;
