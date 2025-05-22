import BusinessTransformationHero from "./comp/BusinessTransformationHero"
import BusinessWebsite from "./comp/BusinessWebsite"
import ConnectivitySection from "./comp/ConnectivitySection"
import FAQSection from "./comp/FAQSection"
import FeaturesSection from "./comp/FeaturesSection"
import IntegrationCategoriesSection from "./comp/IntegrationCategoriesSection"
import TeamPotentialSection from "./comp/TeamPotentialSection"
import TestimonialSlider from "./comp/TestimonialSlider"
import Topsection from "./comp/topsection"

const ServicePage = () => {
  return (
    <div>
      <Topsection/>
      <FeaturesSection/>
      <TeamPotentialSection/>
      <BusinessWebsite/>
      <TestimonialSlider/>
      <ConnectivitySection/>
      <IntegrationCategoriesSection/>
      {/* <BusinessTransformationHero/> */}
      <FAQSection/>
    </div>
  )
}

export default ServicePage