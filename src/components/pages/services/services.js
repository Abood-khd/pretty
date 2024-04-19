"use client";
import Image from "next/image";
import React, { useState } from "react";
import '../../../style/global.css'
import HeroServices from "./hero";
const Services = () => {
  const pricingPackages = [
    {
      packageTitle: "Basic",
      price: "Free",
      pricePerMonth: "per month",
      priceIcon: "images/icon/pricing-icon-2.svg",
      features: [
        "Standard listing submission, active for 30 days",
        "All Operating Supported",
        "Great Interface",
        "Allows encryption",
        "Face recognized system",
        "24/7 Full support",
      ],
    },
    {
      packageTitle: "Professional",
      price: "$199.95",
      pricePerMonth: "per month",
      priceIcon: "images/icon/pricing-icon-1.svg",
      uniqueClass: "unique-class", // Add a unique class for Professional package
      features: [
        "Standard listing submission, active for 30 days",
        "All Operating Supported",
        "Great Interface",
        "Allows encryption",
        "Face recognized system",
        "24/7 Full support",
      ],
    },
    {
      packageTitle: "Business",
      price: "$399.95",
      pricePerMonth: "per month",
      priceIcon: "images/icon/pricing-icon-3.svg",
      features: [
        "Standard listing submission, active for 30 days",
        "All Operating Supported",
        "Great Interface",
        "Allows encryption",
        "Face recognized system",
        "24/7 Full support",
      ],
    },
  ];

  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const handleBillingToggle = () => {
    setIsYearlyBilling((prevIsYearlyBilling) => !prevIsYearlyBilling);
  };

  return (
    <div>
     <HeroServices/>
    </div>
    
  );
};

export default Services;
