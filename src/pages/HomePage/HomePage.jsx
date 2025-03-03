import HeroPage from "../../Components/HeroPage/HeroPage"
import TrainingOffer from "../../Components/Training/TrainingOffer/TrainingOffer"
import CourseWeOffer from "../../Components/CourseWeOffer/CourseWeOffer"
import ChooseUs from "../../Components/HeroPage/ChooseUs/ChooseUs"
import Training from "../../Components/Training/Training"
import ServiceSecondSection from "../../Components/ServicesSection/ServiceSecondSection/ServiceSecondSection"
import BrochureSection from "../../Components/ServicesSection/BrochureSection/BrochureSection"
import Certification from "../../Components/Certification/Certification"
import AssociateInstitution from "../../Components/AssociateInstitution/AssociateInstitution"
import OurTeam from "../../Components/OurTeam/OurTeam"
import SuccessStories from "../../Components/SuccessStories/SuccessStories"
import FAQs from "../../Components/FAQs/FAQs"
const HomePage = () => {
  return (
    <>
    <HeroPage />
    <TrainingOffer />
  <div className="px-[10%]">

    <CourseWeOffer />
  </div>

  <ChooseUs />

  <div className="px-[10%]">
    <Training />
    <ServiceSecondSection />
    <BrochureSection />
    <Certification />
    <AssociateInstitution />
  </div>
  <SuccessStories />

  <OurTeam />
  <FAQs />
  
</>
  )
}

export default HomePage