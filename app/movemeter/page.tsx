"use client";

import React, { useState } from "react";
import { Movemeter } from "../components/movemeter";
import { CityComparison } from "../components/city-comparison";
import { LGBTQFriendliness } from "../components/lgbtq-friendliness";
import { MovemeterChatbot } from "../components/movemeter-chatbot";
import { BlogPostPreview } from "../components/blog-post-preview";
import Agent from "../agents/page";
import Blog from "../blog/page";


export default function MovemeterPage() {
  const [selectedCities, setSelectedCities] = useState([
    "Madison, Wisconsin",
    "San Francisco, California",
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1
          className="text-3xl font-bold text-center mb-8 text-[#F1889F]"
        >
          GayRealEstate.com MoveMeter
        </h1>
        <Movemeter
          fromLocation={selectedCities[0]}
          toLocation={selectedCities[1]}
        />

        <CityComparison
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />

        <LGBTQFriendliness
          toLocation={selectedCities[1]}
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          <MovemeterChatbot onClose={() => {}}/>
          <BlogPostPreview
            selectedCity={selectedCities[1]}
          />
        </div>
        <Agent location={selectedCities[1]} />
        <Blog city="Detroit" />
      </div>
    </div>
  );
}
