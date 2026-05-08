import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogoMarquee from "../components/ClientLogoMarquee";
import DemandDiscoverySection from "../components/DemandDiscoverySection";
import FeaturedWork from "../components/FeaturedWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ClientLogoMarquee />
      <DemandDiscoverySection />
      <FeaturedWork></FeaturedWork>
    </>
  );
}
