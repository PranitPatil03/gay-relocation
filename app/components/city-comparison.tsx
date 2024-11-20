import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CityComparison({
  selectedCities,
  setSelectedCities,
}: {
  selectedCities: string[];
  setSelectedCities: (cities: string[]) => void;
}) {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
  ];

  const categories = [
    "Housing Affordability",
    "Quality of Life",
    "Job Market Strength",
    "Living Affordability",
  ];

  const handleCityChange = (index: number, value: string) => {
    const newSelectedCities = [...selectedCities];
    newSelectedCities[index] = value;
    setSelectedCities(newSelectedCities);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4">
        {[0, 1].map((index) => (
          <Select
            key={index}
            value={selectedCities[index]}
            onValueChange={(value) => handleCityChange(index, value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={`Select City ${index + 1}`} />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCities.map(
                (city, index) =>
                  city && (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span>{city}</span>
                        <span>{Math.floor(Math.random() * 100)}%</span>
                      </div>
                      <Progress
                        value={Math.random() * 100}
                        className="w-full"
                      />
                    </div>
                  )
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
