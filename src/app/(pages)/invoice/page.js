"use client"

import BlogPost from "@/components/pages/terms";
import InvoiceFooter from "@/components/pages/invoice/InvoiceFooter";
import InvoiceTable from "@/components/pages/invoice/InvoiceTable";
import InvoiceTopData from "@/components/pages/invoice/InvoiceTopData";
import PrintInvoice from "@/components/pages/invoice/PrintInvoice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Invoice = () => {
  return (
    <div class="terms-container">
      <h1 class="terms-title">Terms & Conditions</h1>
      <p class="current-date">CURRENT AS OF SEP 2023</p>
      <BlogPost />
    </div>


  );
};

export default Invoice;
