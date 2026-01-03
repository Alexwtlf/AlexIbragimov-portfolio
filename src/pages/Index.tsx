import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WhatIDo } from "@/components/WhatIDo";
import { YCTracker } from "@/components/YCTracker";
import { LetsConnect } from "@/components/LetsConnect";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Projects />
          <WhatIDo />
          <YCTracker />
          <LetsConnect />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
