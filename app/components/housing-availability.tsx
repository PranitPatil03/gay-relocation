"use client";

import React from "react";
import { Home, Heart, Briefcase, DollarSign, Rainbow } from "lucide-react";
import { motion } from "framer-motion";

export function HousingAvailability({
  fromLocation,
  toLocation,
  id,
}: {
  fromLocation: string;
  toLocation: string;
  id?: string;
}) {
  const getHousingData = () => {
    if (id === "housing_availability_5") {
      return {
        "State Income Tax": { from: "9.3%", to: "4.4%" },
        Utilities: { from: 46, to: 36 },
        "Food / Groceries": { from: 57, to: 46 },
        "Sales Tax": { from: "9.5%", to: "8.5%" },
        "Transportation Cost": { from: 80, to: 46 },
      };
    } else if (id === "housing_availability_2") {
      return {
        Education: { from: 60, to: 94 },
        "Healthcare + Fitness": { from: 64, to: 81 },
        "Weather Grade": { from: 61, to: 82 },
        "Air Quality Index": { from: 51, to: 76 },
        "Commute / Transit Score": { from: 53, to: 80 },
        Accessibility: { from: 70, to: 90 },
        "Culture/Entertainment": { from: 66, to: 95 },
      };
    } else if (id === "housing_availability_3") {
      return {
        "Unemployment Rate": { from: "5.2%", to: "3.4%" },
        "Recent Job Growth": { from: "0.15%", to: "2.5%" },
        "Future Job Growth Index": { from: 74, to: 85 },
        "Median Household Income": { from: "$62.93K", to: "$112.45K" },
      };
    } else if (id === "housing_availability_4") {
      return {
        "Legal Protections": { from: "85%", to: "98%" },
        "Social Acceptance": { from: "72%", to: "95%" },
        "Healthcare Access": {
          from: "4 facilities, 10 mental health providers",
          to: "12 facilities, 25 mental health providers",
        },
        "Educational Inclusivity": {
          from: "10 schools, 2 universities",
          to: "25 schools, 8 universities",
        },
      };
    } else {
      return {
        "Home Price": { from: 578100, to: 1200000 },
        "Property Tax": { from: 0.7, to: 0.6 },
        "Home Appreciation Rate": { from: 2.8, to: 5.2 },
        "Price Per Square Foot": { from: 367.41, to: 1000.0 },
      };
    }
  };

  const housingData = getHousingData();

  const formatValue = (key: string, value: number | string) => {
    if (typeof value === "number") {
      if (
        key.toLowerCase().includes("price") ||
        key === "Price Per Square Foot"
      ) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(value);
      } else if (key === "Property Tax" || key === "Home Appreciation Rate") {
        return `${value}%`;
      }
    }
    return value;
  };

  const getTitle = () => {
    switch (id) {
      case "housing_availability_2":
        return { text: "Quality of Life", icon: Heart };
      case "housing_availability_3":
        return { text: "Job Market Strength", icon: Briefcase };
      case "housing_availability_4":
        return { text: "LGBTQ+ Friendliness", icon: Rainbow };
      case "housing_availability_5":
        return { text: "Living Affordability", icon: DollarSign };
      default:
        return { text: "Housing Availability", icon: Home };
    }
  };

  const { text: title, icon: Icon } = getTitle();

  return (
    <div className="bg-white p-6 rounded-lg" id={id}>
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <Icon className="mr-2 h-8 w-8" />
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {fromLocation}
          </h3>
          {Object.entries(housingData).map(([key, value], index) => (
            <motion.div
              key={`${key}-from`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex justify-between items-center mb-2 py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium">{key}</span>
              <span className="font-semibold">
                {formatValue(key, value.from)}
              </span>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {toLocation}
          </h3>
          {Object.entries(housingData).map(([key, value], index) => (
            <motion.div
              key={`${key}-to`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex justify-between items-center mb-2 py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium">{key}</span>
              <span className="font-semibold">
                {formatValue(key, value.to)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center bg-[#F1889F] bg-opacity-20 text-[#F1889F] p-4 rounded-lg"
      >
        <p className="text-lg font-semibold">
          {toLocation} scores higher than {fromLocation} in {title}
        </p>
      </motion.div>
    </div>
  );
}
