import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Bilingual Expertise',
    desc: 'Deep understanding of Korean and Western business cultures, ensuring seamless communication and cultural fit for every placement.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Curated Matching',
    desc: 'We go beyond resumes. Our AI-powered matching combined with human insight ensures the right candidate for every role.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    title: 'Industry Knowledge',
    desc: 'Specialized expertise across tech, finance, manufacturing, and more. We understand what each industry demands.',
  },
]

const steps = [
  { num: '01', title: 'Tell Us Your Needs', desc: 'Share your hiring requirements or career goals with our team.' },
  { num: '02', title: 'We Source & Match', desc: 'Our team identifies top bilingual candidates from our curated network.' },
  { num: '03', title: 'Interview & Select', desc: 'Meet pre-vetted candidates who fit both skills and culture.' },
  { num: '04', title: 'Successful Placement', desc: 'We support onboarding and follow up to ensure lasting success.' },
]

const stats = [
  { value: '500+', label: 'Placements Made' },
  { value: '200+', label: 'Partner Companies' },
  { value: '95%', label: 'Retention Rate' },
  { value: '10+', label: 'Years Experience' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Your Bridge to
              <span className="text-accent-light"> Korean Bilingual </span>
              Talent
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              We connect leading companies with exceptional Korean-speaking professionals.
              Expert recruiting that bridges cultures, languages, and industries.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base"
              >
                Find Talent
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-base"
              >
                Find Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Why Companies Choose Us
            </h2>
            <p className="mt-4 text-neutral-600 text-lg">
              We bring together deep cultural insight, advanced matching technology, and industry expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{p.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-neutral-600 text-lg">
              A streamlined process designed to find the perfect match, fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary/20 mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Find Your Next Great Hire?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Whether you're looking for top Korean bilingual talent or seeking your next career opportunity, we're here to help.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
