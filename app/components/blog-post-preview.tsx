import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BlogPostPreview({ selectedCity }: { selectedCity: string }) {
  // This would be replaced with actual blog post data in a real application
  const blogPost = {
    title: `LGBTQ+ Living in ${selectedCity || "Your City"}`,
    excerpt: `Discover the vibrant LGBTQ+ community and lifestyle in ${
      selectedCity || "your chosen city"
    }. From local hotspots to inclusive neighborhoods, learn what makes this city a great place for LGBTQ+ individuals to call home.`,
    link: "#",
  };

  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle>Featured Blog Post</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{blogPost.title}</h3>
        <p className="mb-4 flex-grow">{blogPost.excerpt}</p>
        <Button className="self-start">Read More</Button>
      </CardContent>
    </Card>
  );
}
