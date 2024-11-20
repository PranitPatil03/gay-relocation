"use client";

import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Agent({ location }: { location: string }) {
  return (
    <div className="bg-gray-100 text-black w-screen max-w-none mt-8">
      <CardHeader className="max-w-4xl mx-auto">
        <CardTitle className="text-2xl text-left">
          LET US GUIDE YOU TO
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-4xl mx-auto flex">
        <div className="w-1/2 pr-4">
          <form className="space-y-4">
            <Input type="text" placeholder="Full name" />

            <Input type="email" placeholder="Email Address" />

            <Input type="tel" placeholder="Mobile Number" />

            <Textarea
              placeholder={`Hi, I would like to know more about ${location}`}
              rows={4}
            />

            <Button
              type="submit"
              className="bg-[#F1889F] hover:bg-[#E16B84] text-white w-full"
            >
              FIND AN AGENT
            </Button>
          </form>
        </div>
        <div className="w-1/2 pl-4 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-left">{location}</h3>
            <p className="text-sm mb-4 text-left">
              GayRealEstate.com® affiliated agents are here to help you find the
              perfect home, no matter where it may be. Our network of 100,000
              agents means we&apos;ve got powerful local expertise in your
              market and across the map.
            </p>
          </div>
        </div>
      </CardContent>
    </div>
  );
}
