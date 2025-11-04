// import Head from 'next/head'
// import Navigation from '@/components/layout/Navigation'
// import BackToTop from '@/components/layout/BackToTop'
// import Hero from '@/components/sections/Hero'
// import About from '@/components/sections/About'
// import VisionMission from '@/components/sections/VisionMission'
// import CoreValues from '@/components/sections/CoreValues'
// import Objectives from '@/components/sections/Objectives'
// import TargetGroups from '@/components/sections/TargetGroups'
// import Services from '@/components/sections/Services'
// import GetInvolved from '@/components/sections/GetInvolved'
// import Blog from '@/components/sections/Blog'
// import Contact from '@/components/sections/Contact'
// import SocialMedia from '@/components/sections/SocialMedia'
// import Footer from '@/components/sections/Footer'
// import ImageSection from '@/components/ui/ImageSection'

// export default function CAPSPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 text-slate-900 overflow-x-hidden">
//       <Navigation />

//       <Hero />

//       <ImageSection
//         src="/landing.jpg"
//         alt="Peace Corps - The Budala Women's Group is on a mission to economically empower one another"
//         caption="The Budala Women's Group is on a mission to economically empower one another"
//       />

//       <About />
//       <VisionMission />
//       <CoreValues />
//       <Objectives />

//       <ImageSection
//   src="/childMarriage.jpg"
//   alt="Child Marriage in Malawi - HRW"
//   caption={`"I've Never Experienced Happiness": Child Marriage in Malawi`}
// />


//       <TargetGroups />
//       <Services />
//       <GetInvolved />

//       {/* ADD DONATION SECTION HERE */}
//       <div id="donate" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 text-center">
//           <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//             Support Our Mission
//           </h2>
//           <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
//             Your donation helps us continue our work in education, healthcare, and community empowerment across Malawi.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <button className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all">
//               <div className="text-2xl font-bold text-blue-600 mb-2">MK 5,000</div>
//               <div className="text-slate-600">Supports one child's education for a month</div>
//             </button>

//             <button className="p-6 bg-purple-50 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all">
//               <div className="text-2xl font-bold text-purple-600 mb-2">MK 25,000</div>
//               <div className="text-slate-600">Provides healthcare for a family</div>
//             </button>

//             <button className="p-6 bg-green-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all">
//               <div className="text-2xl font-bold text-green-600 mb-2">Custom</div>
//               <div className="text-slate-600">Choose your amount</div>
//             </button>
//           </div>

//           <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto">
//             <h3 className="text-xl font-bold mb-4">Bank Transfer Details</h3>
//             <div className="text-left space-y-2 text-slate-700">
//               <p><strong>Bank:</strong> National Bank of Malawi</p>
//               <p><strong>Account Name:</strong> CAPS Malawi</p>
//               <p><strong>Account Number:</strong> 1000 1234 5678</p>
//               <p><strong>Branch:</strong> Mzuzu</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* END DONATION SECTION */}

//       <Blog />
//       <Contact />
//       <SocialMedia />
//       <Footer />

//       <BackToTop />
//     </div>
//   )
// }




import Head from 'next/head'
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

      {/* ✅ Google Site Verification Meta Tag */}
      <Head>
        <meta
          name="google-site-verification"
          content="EkHHajOOwHDl9LUj0Ofoic11cuVnrlQXeOhSojfKVUg"
        />
        <title>CAPS Malawi | Community Empowerment</title>
        <meta
          name="description"
          content="CAPS Malawi works to empower communities through education, healthcare, and sustainable development initiatives."
        />
      </Head>

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

      {/* 💰 Donation Section */}
      <div id="donate" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 text-center">
          <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Support Our Mission
          </h2>
          <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
            Your donation helps us continue our work in education, healthcare, and community empowerment across Malawi.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all">
              <div className="text-2xl font-bold text-blue-600 mb-2">MK 5,000</div>
              <div className="text-slate-600">Supports one child's education for a month</div>
            </button>

            <button className="p-6 bg-purple-50 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <div className="text-2xl font-bold text-purple-600 mb-2">MK 25,000</div>
              <div className="text-slate-600">Provides healthcare for a family</div>
            </button>

            <button className="p-6 bg-green-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all">
              <div className="text-2xl font-bold text-green-600 mb-2">Custom</div>
              <div className="text-slate-600">Choose your amount</div>
            </button>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Bank Transfer Details</h3>
            <div className="text-left space-y-2 text-slate-700">
              <p><strong>Bank:</strong> National Bank of Malawi</p>
              <p><strong>Account Name:</strong> CAPS Malawi</p>
              <p><strong>Account Number:</strong> 1000 1234 5678</p>
              <p><strong>Branch:</strong> Mzuzu</p>
            </div>
          </div>
        </div>
      </div>
      {/* END Donation Section */}

      <Blog />
      <Contact />
      <SocialMedia />
      <Footer />

      <BackToTop />
    </div>
  )
}
