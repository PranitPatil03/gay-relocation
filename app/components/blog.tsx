"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export function Blog({ city }: { city: string }) {
  console.log(city);
  const blogPosts = [
    {
      title: "Top 5 LGBTQ+ Friendly Neighborhoods in San Francisco",
      excerpt:
        "Discover the most welcoming areas for the LGBTQ+ community in San Francisco, from Castro to SoMa.",
      date: "June 15, 2023",
      image: "https://picsum.photos/seed/sanfrancisco1/400/250",
    },
    {
      title: "San Francisco's Thriving Art Scene: A Guide for LGBTQ+ Artists",
      excerpt:
        "Explore the vibrant art community in San Francisco and learn about LGBTQ+-friendly galleries and events.",
      date: "May 28, 2023",
      image: "https://picsum.photos/seed/sanfrancisco2/400/250",
    },
    {
      title:
        "Navigating San Francisco's Real Estate Market as an LGBTQ+ Homebuyer",
      excerpt:
        "Tips and insights for LGBTQ+ individuals looking to purchase a home in San Francisco's competitive market.",
      date: "April 10, 2023",
      image: "https://picsum.photos/seed/sanfrancisco3/400/250",
    },
  ];

  return (
    <Card className="mt-8 bg-[#F1889F] bg-opacity-20 text-black w-screen max-w-none">
      <CardHeader className="max-w-4xl mx-auto">
        <CardTitle className="text-2xl font-bold text-[#F1889F]">
          Latest Blog Posts about San Francisco
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#F1889F]">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Button
                    variant="outline"
                    className="text-[#F1889F] border-[#F1889F] hover:bg-[#F1889F] hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
