import React from "react";
import {
  Rainbow,
  Heart,
  Building2,
  GraduationCap,
  PartyPopper,
  Users,
  Briefcase,
  Landmark,
  Home,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";

export function LGBTQFriendliness({ 
  toLocation, 
  lgbtqResources 
}: { 
  toLocation: string, 
  lgbtqResources?: Array<{
    title: string;
    description: string;
    strings: string[];
  }>;
}) {
  const iconMap = {
    Healthcare: Heart,
    CommunityCenter: Building2,
    LegalProtections: Rainbow,
    Education: GraduationCap,
    Events: PartyPopper,
    SupportGroups: Users,
    Employment: Briefcase,
    Government: Landmark,
    Housing: Home,
    Nightlife: Utensils,
  };

  console.log("lgbtqResources", lgbtqResources);

  if (!lgbtqResources || lgbtqResources.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
          <Rainbow className="mr-2 h-8 w-8" />
          LGBTQ+ Resources in {toLocation}
        </h2>
        <p className="text-gray-600">No LGBTQ+ resources found for this location.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <Rainbow className="mr-2 h-8 w-8" />
        LGBTQ+ Resources in {toLocation}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {lgbtqResources.map((resource, index) => {
          const ResourceIcon = iconMap[resource.title as keyof typeof iconMap] || Landmark;
          
          return (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[#F1889F] bg-opacity-10 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#F1889F] flex items-center">
                <ResourceIcon className="h-6 w-6 mr-2" />
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-left">
                {resource.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-left">
                {resource.strings.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-700">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
