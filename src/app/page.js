import CertificationsSection from "@/components/CertificationsSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import DifferenceSection from "@/components/DifferenceSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import IsoCertification from "@/components/IsoCertification";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/OurProducts";
import RCCertification from "@/components/RCCertification";
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <Services />
      <CertificationsSection />
      <IsoCertification />  
      <RCCertification />
      <OurProducts />
      <DifferenceSection />
      <OurProcess />
      <ChooseUsSection />
    </>
  );
};

export default Home;
