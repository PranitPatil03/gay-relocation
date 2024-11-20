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

export function LGBTQFriendliness({ toLocation }: { toLocation: string }) {
  const getLGBTQResources = () => {
    return {
      Healthcare: {
        name: "LGBTQ+ Health Services",
        description:
          "Comprehensive healthcare services tailored for the LGBTQ+ community.",
        resources: [
          "San Francisco AIDS Foundation",
          "Lyon-Martin Health Services",
          "UCSF Gender Affirming Health Program",
          "SF Community Health Center",
        ],

        icon: Heart,
      },
      CommunityCenter: {
        name: "LGBTQ+ Community Centers",
        description:
          "Spaces offering support, resources, and social connections.",
        resources: [
          "SF LGBT Center",
          "GLBT Historical Society Museum",
          "The LGBTQ+ Youth Space",
          "Openhouse (for LGBTQ+ seniors)",
        ],

        icon: Building2,
      },
      LegalProtections: {
        name: "Legal Support & Advocacy",
        description:
          "Organizations providing legal assistance and advocacy for LGBTQ+ rights.",
        resources: [
          "National Center for Lesbian Rights",
          "Transgender Law Center",
          "BALIF (Bay Area Lawyers for Individual Freedom)",
          "Our Family Coalition (for LGBTQ+ families)",
        ],

        icon: Rainbow,
      },
      Education: {
        name: "LGBTQ+ Inclusive Education",
        description:
          "Educational institutions and programs with strong LGBTQ+ support.",
        resources: [
          "GLSEN Bay Area Chapter",
          "SF State University LGBTQ Studies Department",
          "Out in Tech - SF Chapter",
          "Lavender Youth Recreation & Information Center (LYRIC)",
        ],

        icon: GraduationCap,
      },
      Events: {
        name: "LGBTQ+ Events & Celebrations",
        description: "Major events and celebrations in the LGBTQ+ community.",
        resources: [
          "San Francisco Pride Parade & Celebration",
          "Frameline - SF International LGBTQ+ Film Festival",
          "Fresh Meat Festival (transgender and queer performance)",
          "Folsom Street Fair",
        ],

        icon: PartyPopper,
      },
      SupportGroups: {
        name: "Support & Social Groups",
        description: "Groups offering peer support and social connections.",
        resources: [
          "PFLAG San Francisco",
          "API Equality - Northern California",
          "El/La Para TransLatinas",
          "Black Brothers Esteem",
        ],

        icon: Users,
      },
      Employment: {
        name: "LGBTQ+ Employment Resources",
        description:
          "Organizations supporting LGBTQ+ individuals in the workplace.",
        resources: [
          "Out & Equal Workplace Advocates",
          "StartOut (for LGBTQ+ entrepreneurs)",
          "SF LGBT Chamber of Commerce",
          "Trans Employment Program (TEEI)",
        ],

        icon: Briefcase,
      },
      Government: {
        name: "Government LGBTQ+ Initiatives",
        description:
          "Official city programs and services for the LGBTQ+ community.",
        resources: [
          "SF Office of Transgender Initiatives",
          "SF Human Rights Commission - LGBTQI Division",
          "SFPD LGBTQ Liaison",
          "SF Department of Public Health - LGBTQ Health Equity",
        ],

        icon: Landmark,
      },
      Housing: {
        name: "LGBTQ+ Housing Resources",
        description:
          "Housing assistance and communities for LGBTQ+ individuals.",
        resources: [
          "Openhouse LGBTQ Senior Housing",
          "SF LGBT Community Center Housing Program",
          "Larkin Street Youth Services (LGBTQ+ youth housing)",
          "Jazzie's Place (LGBTQ adult shelter)",
        ],

        icon: Home,
      },
      Nightlife: {
        name: "LGBTQ+ Nightlife & Entertainment",
        description: "Popular LGBTQ+ bars, clubs, and entertainment venues.",
        resources: [
          "The Castro district (numerous LGBTQ+ venues)",
          "Oasis",
          "Beaux",
          "El Rio",
        ],

        icon: Utensils,
      },
    };
  };

  const sanFranciscoResources = getLGBTQResources();

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <Rainbow className="mr-2 h-8 w-8" />
        LGBTQ+ Resources in {toLocation}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(sanFranciscoResources).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-[#F1889F] bg-opacity-10 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            id={`id_1729865053257_${key}`}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#F1889F] flex items-center">
              <value.icon className="h-6 w-6 mr-2" />

              {value.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-left">
              {value.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              {value.resources.map((resource, resourceIndex) => (
                <li key={resourceIndex} className="text-sm text-gray-700">
                  {resource}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
