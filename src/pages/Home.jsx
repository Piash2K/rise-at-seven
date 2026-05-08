import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogoMarquee from "../components/ClientLogoMarquee";
import DemandDiscoverySection from "../components/DemandDiscoverySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ClientLogoMarquee />
      <DemandDiscoverySection />
    </>
  );
}
