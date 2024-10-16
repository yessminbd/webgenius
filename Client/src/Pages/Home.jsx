import FeatureSection from "../Sections/FeatureSection"
import HeroSection from "../Sections/HeroSection"
import Pricing from "../Sections/Pricing"
import Testimonials from "../Sections/Testimonials"
import Workflow from "../Sections/Workflow"


export const Home = () => {
    return (<>
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection id="home"  />
            <FeatureSection id="features" />
            <Workflow id="workflow" />
            <Pricing id="pricing"  />
            <Testimonials id="testimonials"/>
        </div>
    </>
    )
}

