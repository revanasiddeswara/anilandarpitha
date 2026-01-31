import HeroSection from "../component/wedding/HeroSection";
import PhotoSlider from "../component/wedding/PhotoSlider";
import SacredBlessing from "../component/wedding/SacredBlessing";
import OurStory from "../component/wedding/OurStory";
import WeddingEvents from "../component/wedding/WeddingEvents";
import VenueSection from "../component/wedding/VenueSection";
import FamilyInvitation from "../component/wedding/FamilyInvitation";
import ClosingSection from "../component/wedding/ClosingSection";
import VideoSection from "@/component/wedding/VideoSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <VideoSection/>
      <PhotoSlider />
      <SacredBlessing />
      <OurStory />
      <WeddingEvents />
      <VenueSection />
      <FamilyInvitation />
      <ClosingSection />
    </main>
  );
};

export default Index;
