import Image from 'next/image'
import { Stethoscope, GraduationCap, Leaf, Scale } from 'lucide-react'

export default function Services() {
  return (
    <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 text-slate-800">What We Do</h2>
        <p className="text-slate-700 text-xl max-w-4xl mx-auto leading-relaxed">
          CAPS operates in key sectors to deliver holistic, transformative support. Drawing from effective models like WaterAid Malawi's WASH initiatives and CARE's focus on women's empowerment, our programs address root causes of poverty and inequality.
        </p>
      </div>

      {/* Health & Wellness */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl border border-rose-200">
          <div className="flex flex-col justify-center bg-gradient-to-br from-rose-50 to-pink-50 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-rose-100 rounded-2xl">
                <Stethoscope className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-800">Health & Wellness</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              We conduct HIV/AIDS awareness campaigns, distribute preventive tools like condoms, and promote
              nutrition, clean water, and sanitation in vulnerable areas. Inspired by global efforts, we aim to
              reduce stigma and improve access, much like World Vision's nutrition policy advocacy.
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/health wellness.jpg"
              alt="Problems With Education in Malawi and How to Solve Them"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Education & Skills Development */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl border border-blue-200">
          <div className="relative w-full h-full order-2 lg:order-1">
            <Image
              src="/eduskills.jpg"
              alt="Malawi's school kids are using tablets to improve their reading and maths skills"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-10 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-800">Education & Skills Development</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Supporting OVCs, women, children, and persons with disabilities, we enhance access to quality education,
              establish Early Childhood Development (ECD) and Community-Based Child Care (CBCC) centers, and provide
              vocational and entrepreneurship training to build brighter futures.
            </p>
            <p className="text-slate-600 italic">
              Malawi's school kids are using tablets to improve their reading and maths skills.
            </p>
          </div>
        </div>
      </div>

      {/* Agriculture & Environment */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl border border-green-200">
          <div className="flex flex-col justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-800">Agriculture & Environment</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              We advance sustainable farming, climate-resilient livelihoods, environmental protection,
              reforestation, and land rehabilitation, helping communities combat deforestation and
              disasters, similar to collaborative reforestation efforts seen in other Malawian NGOs.
            </p>
            <p className="text-slate-600 italic">
              Collaborative reforestation in Malawi supports ag, climate adaptation.
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/agrienv.jpg"
              alt="Collaborative reforestation in Malawi supports ag, climate adaptation"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Human Rights & Social Empowerment */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-purple-200">
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/human rights.jpg"
              alt="Facilitation Training for Women-led NGOs & CBOs in South Africa"
              width={600}
              height={400}
              className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-2xl">
                <Scale className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-800">Human Rights & Social Empowerment</h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              Advocating for marginalized groups, we offer counseling for abuse victims, promote gender equality, and fight gender-based violence, fostering inclusive societies through rights-based approaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
