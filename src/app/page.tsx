import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import TabInterface from "@/components/TabInterface";
import Contest from "@/components/Contest";
import BlogSection from "@/components/BlogSection";
import SocialLink from "@/components/SocialLink";
import Radar from "@/components/Radar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <HeroSection />
        <AboutSection />
        <Radar />
        <TabInterface />
        <Contest />
        <Projects />
        <BlogSection limit={5} />
        <SocialLink />
      </div>
    </main>
  );
}
