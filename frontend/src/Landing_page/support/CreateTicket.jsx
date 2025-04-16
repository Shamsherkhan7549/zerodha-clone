/** @format */

import React from "react";
import Ticket from "./Ticket";

const CreateTicket = () => {
  return (
    <div className='container'>
      <div className='row py-5'>
        <h4>To create a ticket, select a relevant topic</h4>
       <Ticket 
       icon={"fa-solid fa-circle-plus text-muted"}
       text1={"Account Opening"}
       text2={"Resident individual"}
       text3={"Minor"}
       text4={"Non Resident Indian (NRI)"}
       text5={"Company, Partnership, HUF and LLP"}
       text6={"Glossary"}
       />

       <Ticket
       icon={"fa-solid fa-user"}
       text1={" Your Zerodha Account"}
       text2={"Login credentials"}
       text3={"Your Profile"}
       text4={"Account modification"}
       text5={"Client Master Report (CMR) and Depository"}
       text6={"Participant (DP)"}
       text7={"Nomination"}
       text8={"Transfer and conversion of securities"}
       />

<Ticket
    icon={"fa-solid fa-bars-staggered"}
       text1={" Kite"}
       text2={"IPO"}
       text3={"Trading FAQs"}
       text4={"Margin Trading Facility (MTF) and Margins"}
       text5={"Charts and orders"}
       text6={"Alerts and Nudges"}
       text7={"General"}
       />

<Ticket
icon={"fa-solid fa-box"}
       text1={" Funds"}
       text2={"Fund withdrawal"}
       text3={"Adding funds"}
       text4={"Adding bank accounts"}
       text5={"eMandates"}
      
       />

<Ticket
icon={"fa-regular fa-user"}
       text1={" Console"}
       text2={"Portfolio"}
       text3={"Corporate actions"}
       text4={"Funds statement"}
       text5={"Reports"}
       text6={"Profile"}
       text7={"Segments"}
       />

<Ticket
icon={"fa-solid fa-coins"}
       text1={"Coin"}
       text2={"Understanding mutual funds and Coin"}
       text3={"Coin app"}
       text4={"Coin web"}
       text5={"Transactions and reports"}
       text6={"National Pension Scheme (NPS)"}
       />
      </div>
    </div>
  );
};

export default CreateTicket;
