import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WhatIDo } from "@/components/WhatIDo";
import { YCTracker } from "@/components/YCTracker";
import { LetsConnect } from "@/components/LetsConnect";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <WhatIDo />
        <YCTracker />
        <LetsConnect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
