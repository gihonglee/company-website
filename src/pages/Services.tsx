import { Link } from 'react-router-dom'

const employerServices = [
  {
    title: 'Executive Search',
    desc: 'Find bilingual leaders who can navigate both Korean and Western business environments at the executive level.',
    features: ['C-suite & VP-level placements', 'Confidential searches', 'Board advisory support'],
  },
  {
    title: 'Bilingual Staffing',
    desc: 'Access our curated pool of Korean-English bilingual professionals for permanent, contract, or temp-to-hire roles.',
    features: ['Pre-vetted candidates', 'Fast turnaround', 'Cultural fit assessment'],
  },
  {
    title: 'Recruitment Process Outsourcing',
    desc: 'Let us manage your entire bilingual hiring pipeline, from sourcing to onboarding.',
    features: ['End-to-end hiring', 'Dedicated account team', 'Scalable solutions'],
  },
]

const candidateServices = [
  {
    title: 'Career Consultation',
    desc: 'One-on-one guidance to help you navigate the bilingual job market and find roles that match your ambitions.',
  },
  {
    title: 'Resume & Interview Prep',
    desc: 'Tailored resume building and interview coaching for both Korean and English-language environments.',
  },
  {
    title: 'Job Matching',
    desc: 'AI-powered matching to connect you with opportunities that fit your skills, experience, and career goals.',
  },
]

const industries = [
  'Technology', 'Finance & Banking', 'Healthcare', 'Manufacturing',
  'Consumer Goods', 'E-Commerce', 'Professional Services', 'Logistics',
]

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Services</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Comprehensive recruiting solutions for employers and candidates.
          </p>
        </div>
      </section>

      {/* For Employers */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">For Employers</span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-2">
              Find the Bilingual Talent You Need
            </h2>
            <p className="mt-4 text-neutral-600 text-lg max-w-2xl">
              From executive search to full-scale RPO, we deliver Korean bilingual
              professionals who drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employerServices.map((s) => (
              <div key={s.title} className="border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="mt-auto space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Candidates */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">For Candidates</span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-2">
              Advance Your Bilingual Career
            </h2>
            <p className="mt-4 text-neutral-600 text-lg max-w-2xl">
              Personalized support to help you land the right role at the right company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candidateServices.map((s) => (
              <div key={s.title} className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Industries We Serve</h2>
            <p className="mt-4 text-neutral-600 text-lg">
              Specialized expertise across key sectors.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-neutral-100 text-neutral-700 px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Let's Find Your Perfect Match
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Tell us what you're looking for and we'll take it from there.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
