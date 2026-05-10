import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogoMarquee from "../components/ClientLogoMarquee";
import DemandDiscoverySection from "../components/DemandDiscoverySection";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import ChaseMarquee from "../components/ChaseMarquee";
import LegacyInTheMaking from "../components/LegacyInTheMaking";
import WhatsNewSection from "../components/WhatsNewSection";
import ReadyToRiseSection from "../components/ReadyToRiseAtSeven";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ClientLogoMarquee />
      <DemandDiscoverySection />
      <FeaturedWork></FeaturedWork>
      <Services />
      <ChaseMarquee />
      <LegacyInTheMaking />
      <WhatsNewSection></WhatsNewSection>
      <ReadyToRiseSection />
    </>
  );
}
