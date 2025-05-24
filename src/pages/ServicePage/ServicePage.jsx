import BusinessTransformationHero from "./comp/BusinessTransformationHero"
import BusinessWebsite from "./comp/BusinessWebsite"
import ConnectivitySection from "./comp/ConnectivitySection"
import FAQSection from "./comp/FAQSection"
import FeaturesSection from "./comp/FeaturesSection"
import IntegrationCategoriesSection from "./comp/IntegrationCategoriesSection"
import TeamPotentialSection from "./comp/TeamPotentialSection"
import TestimonialSlider from "./comp/TestimonialSlider"
import TopSection from "./comp/TopSection"
const ServicePage = () => {
  return (
    <div>
      <TopSection/>
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