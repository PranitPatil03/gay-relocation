"use client";

import React from "react";
import { Home, Heart, Briefcase, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

interface DataItem {
  name: string;
  value: string;
}

interface HousingAvailabilityProps {
  fromLocation: string;
  toLocation: string;
  id?: string;
  cityData1: {
    name: string;
    data: {
      [key: string]: Array<DataItem>;
    };
  };
  cityData2: {
    name: string;
    data: {
      [key: string]: Array<DataItem>;
    };
  };
}

export function HousingAvailability({
  fromLocation,
  toLocation,
  id,
  cityData1,
  cityData2,
}: HousingAvailabilityProps) {
  const getDataForSection = (id: string | undefined) => {
    switch (id) {
      case "quality":
        return {
          dataKey: "Quality of Life",
          title: "Quality of Life",
          icon: Heart,
        };
      case "job":
        return {
          dataKey: "Job Market Strength",
          title: "Job Market Strength",
          icon: Briefcase,
        };
      case "living":
        return {
          dataKey: "Living Affordability",
          title: "Living Affordability",
          icon: DollarSign,
        };
      default:
        return {
          dataKey: "Housing Availability",
          title: "Housing Availability",
          icon: Home,
        };
    }
  };

  const { dataKey, title, icon: Icon } = getDataForSection(id);

  const fromData = cityData1.data[dataKey] || [];
  const toData = cityData2.data[dataKey] || [];

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
          {fromData.map((item, index) => (
            <motion.div
              key={`${item.name}-from`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex justify-between items-center mb-2 py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-semibold">
                {formatValue(item.name, item.value)}
              </span>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {toLocation}
          </h3>
          {toData.map((item, index) => (
            <motion.div
              key={`${item.name}-to`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex justify-between items-center mb-2 py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-semibold">
                {formatValue(item.name, item.value)}
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
