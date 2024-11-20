import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  Heart,
  Briefcase,
  DollarSign,
  Rainbow,
  MessageCircle,
  Share2,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LGBTQFriendliness } from "./lgbtq-friendliness";
import { MovemeterChatbot } from "./movemeter-chatbot";
import { HousingAvailability } from "./housing-availability";
import Agent from "../agents/page";
export function Movemeter({ fromLocation, toLocation }: { fromLocation: string; toLocation: string }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [activeTab, setActiveTab] = useState("housing");
  const tabsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => {
        if (prevScore < 87) {
          return prevScore + 1;
        }
        clearInterval(interval);
        return prevScore;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Housing Affordability", icon: Home, score: 45, id: "housing" },
    { name: "Quality of Life", icon: Heart, score: 80, id: "quality" },
    { name: "Job Market Strength", icon: Briefcase, score: 65, id: "job" },
    { name: "Living Affordability", icon: DollarSign, score: 55, id: "living" },
    { name: "LGBTQ+ Resources", icon: Rainbow, score: 90, id: "lgbtq" },
  ];

  const scrollToTabs = () => {
    if (tabsRef.current) {
      (tabsRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-50"
    >
      <div
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-8 text-[#F1889F]"
        >
          YOUR MOVE METER® REPORT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl mb-12 text-gray-700"
        >
          Based on the data, here&apos;s how your potential move from{" "}
          <span className="font-semibold">
            {fromLocation}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {toLocation}
          </span>{" "}
          compares
        </motion.p>

        <div
          className="flex flex-col items-center mb-16 space-y-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative w-64 h-64 mb-8"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="10"
              />

              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#F1889F"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="283"
                transform="rotate(-90 50 50)"
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - score * 2.83 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
              />
            </svg>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.span
                className="text-6xl font-bold text-[#F1889F]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                87%
              </motion.span>
              <span
                className="text-sm uppercase text-gray-600 mt-2"
              >
                Overall Move Score
              </span>
            </div>
          </motion.div>

          {/* Category cards section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl mb-12"
          >
            {categories
              .filter((category) => category.id !== "lgbtq")
              .map((category) => (
                <Card
                  key={category.id}
                  className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent
                    className="p-6 flex flex-col items-center"
                  >
                    <category.icon
                      className="w-12 h-12 text-[#F1889F] mb-4"
                    />

                    <Progress
                      value={category.score}
                      className="w-full h-3 mb-4"
                    />

                    <h3
                      className="text-sm font-medium text-gray-700 mb-2 text-center"
                    >
                      {category.name.toUpperCase()}
                    </h3>
                    <span
                      className="text-3xl font-bold text-[#F1889F]"
                    >
                      {category.score}%
                    </span>
                  </CardContent>
                </Card>
              ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              <Button
                className="bg-[#F1889F] hover:bg-[#E16B84] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
              >
                <Share2 className="mr-2 h-5 w-5" />
                SHARE REPORT
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              <Button
                variant="outline"
                className="text-[#F1889F] text-lg px-8 py-4 rounded-full hover:bg-[#F1889F] hover:text-white transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
                onClick={scrollToTabs}
              >
                <FileText
                  className="mr-2 h-5 w-5"
                />
                SEE YOUR DETAILED REPORT
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full"
            ref={tabsRef}
          >
            <Tabs
              defaultValue="housing"
              className="w-full mt-8"
            >
              <TabsList
                className="flex justify-center mb-8 p-1 rounded-full bg-gray-50"
              >
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex flex-col items-center space-y-2 px-6 py-3 rounded-full transition-all duration-300 mx-1 ${
                      activeTab === category.id
                        ? "bg-[#F1889F]"
                        : "bg-white hover:bg-gray-200"
                    }`}
                    style={{ width: "180px" }} // Set a fixed width for all tabs
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        activeTab === category.id
                          ? "text-[#F1889F]"
                          : "text-gray-600"
                      }`}
                    />

                    <span
                      className={`text-xs font-medium ${
                        activeTab === category.id ? "text-[#F1889F]" : ""
                      }`}
                    >
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    {category.id === "lgbtq" && (
                      <LGBTQFriendliness
                        toLocation={toLocation}
                      />
                    )}

                    {category.id === "housing" && (
                      <HousingAvailability
                        fromLocation={fromLocation}
                        toLocation={toLocation}
                      />
                    )}

                    {category.id === "quality" && (
                      <HousingAvailability
                        fromLocation={fromLocation}
                        toLocation={toLocation}
                      />
                    )}

                    {category.id === "job" && (
                      <HousingAvailability
                        fromLocation={fromLocation}
                        toLocation={toLocation}
                      />
                    )}

                    {category.id === "living" && (
                      <HousingAvailability
                        fromLocation={fromLocation}
                        toLocation={toLocation}
                      />
                    )}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>

        <AnimatePresence>
          {isButtonVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-10 right-10"
            >
              <Button
                className="bg-[#F1889F] hover:bg-[#E16B84] text-white rounded-full p-4 w-16 h-16 flex items-center justify-center text-xl transition-all duration-300 shadow-lg"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageCircle
                  className="h-8 w-8"
                />
              </Button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg whitespace-nowrap"
              >
                <p
                  className="text-sm text-gray-700"
                >
                  Hey, ask your questions about {toLocation}!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <MovemeterChatbot
            onClose={() => setIsChatOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <Agent location={toLocation} />
      </motion.div>
    </motion.div>
  );
}
