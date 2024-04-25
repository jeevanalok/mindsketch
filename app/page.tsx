"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
