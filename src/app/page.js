import Navigation from '@/components/layout/Navigation'
import BackToTop from '@/components/layout/BackToTop'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import VisionMission from '@/components/sections/VisionMission'
import CoreValues from '@/components/sections/CoreValues'
import Objectives from '@/components/sections/Objectives'
import TargetGroups from '@/components/sections/TargetGroups'
import Services from '@/components/sections/Services'
import GetInvolved from '@/components/sections/GetInvolved'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import SocialMedia from '@/components/sections/SocialMedia'
import Footer from '@/components/sections/Footer'
import ImageSection from '@/components/ui/ImageSection'

export default function CAPSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 text-slate-900 overflow-x-hidden">
      <Navigation />

      <Hero />

      <ImageSection
        src="/landing.jpg"
        alt="Peace Corps - The Budala Women's Group is on a mission to economically empower one another"
        caption="The Budala Women's Group is on a mission to economically empower one another"
      />

      <About />
      <VisionMission />
      <CoreValues />
      <Objectives />

     <ImageSection
  src="/childMarriage.jpg"
  alt="Child Marriage in Malawi - HRW"
  caption={`"I've Never Experienced Happiness": Child Marriage in Malawi`}
/>


      <TargetGroups />
      <Services />
      <GetInvolved />
      <Blog />
      <Contact />
      <SocialMedia />
      <Footer />

      <BackToTop />
    </div>
  )
}
