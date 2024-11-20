"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Movemeter } from "../components/movemeter";
import { Blog } from "../components/blog";

export default function MovemeterLanding() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCompare = () => {
    if (fromLocation && toLocation) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowSummary(true);
      }, 2000);
    }
  };

  const handleSwapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  const scrollToDetailedReport = () => {
    const detailedReportSection = document.getElementById("detailed-report");
    if (detailedReportSection) {
      detailedReportSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex-grow flex flex-col justify-center items-center text-[#F1889F]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-40"
          aria-hidden="true"
        ></div>
        <AnimatePresence>
          {!showSummary ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 max-w-4xl mx-auto relative z-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Discover Your Next Home Destination
              </h1>
              <p className="text-lg md:text-xl mb-12 text-gray-200">
                Get insights on affordability, quality of life, job market, and
                more with just a few clicks.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <Input
                  type="text"
                  placeholder="From (City, State, or Zip)"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full md:w-80 bg-white text-gray-800 border-[#F1889F] rounded-md py-3 px-6 transition-all duration-300 focus:ring-2 focus:ring-[#F1889F] focus:border-transparent"
                />

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={handleSwapLocations}
                    className="bg-white text-[#F1889F] rounded-full p-2 hover:bg-[#F1889F] hover:text-white transition-all duration-300"
                  >
                    <ArrowLeftRight className="h-6 w-6" />
                  </Button>
                </motion.div>

                <Input
                  type="text"
                  placeholder="To (City, State, or Zip)"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full md:w-80 bg-white text-gray-800 border-[#F1889F] rounded-md py-3 px-6 transition-all duration-300 focus:ring-2 focus:ring-[#F1889F] focus:border-transparent"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleCompare}
                  className="bg-[#F1889F] hover:bg-[#E16B84] text-white font-bold py-4 px-16 rounded-md text-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Calculating...
                    </div>
                  ) : (
                    "Compare/Calculate"
                  )}
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between items-center w-full h-full px-4 py-8 relative z-10 bg-[#F1889F] bg-opacity-20"
            >
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  BIG MOVE!
                </h2>
                <p className="text-xl text-white mb-8">
                  A move from {fromLocation} to {toLocation} covers a
                  significant distance. This move would bring substantial
                  changes in cost of living, climate, and urban environment.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToDetailedReport}
                  className="bg-white text-[#F1889F] hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg mt-auto transition-all duration-300"
                >
                  Show Detailed Report
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {showSummary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white py-16"
        >
          <Movemeter fromLocation={fromLocation} toLocation={toLocation} />

          <Blog city="San Francisco" />
        </motion.div>
      )}
    </div>
  );
}
