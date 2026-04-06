import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Cultural Bridge',
    desc: 'We understand both Korean and Western business cultures at a deep level, enabling placements that truly work for both sides.',
  },
  {
    title: 'Quality Over Quantity',
    desc: 'Every candidate is carefully vetted and matched. We believe in meaningful connections, not mass applications.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We don\'t just fill positions \u2014 we build lasting relationships with both clients and candidates for ongoing success.',
  },
  {
    title: 'Technology-Driven',
    desc: 'AI-powered matching combined with human expertise ensures faster, more accurate placements every time.',
  },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Us</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Bridging cultures and connecting talent since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  BridgeKo was founded with a simple but powerful mission: to connect
                  exceptional Korean-speaking professionals with companies that value
                  bilingual talent and cross-cultural expertise.
                </p>
                <p>
                  We recognized a gap in the market \u2014 companies expanding into Korean
                  markets or serving Korean-speaking communities needed more than just
                  language skills. They needed professionals who could bridge cultural
                  nuances, business practices, and communication styles.
                </p>
                <p>
                  Today, we serve hundreds of partner companies ranging from Fortune 500
                  corporations to fast-growing startups, placing bilingual professionals
                  across technology, finance, healthcare, manufacturing, and more.
                </p>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-10 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">BK</div>
                <p className="text-neutral-500 text-sm">BridgeKo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-6">Our Mission</h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              To be the premier bridge between Korean bilingual talent and global
              opportunities \u2014 delivering placements that drive business success and
              career growth through deep cultural understanding and innovative matching
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{v.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Want to Work With Us?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Let's discuss how we can help you find the perfect match.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
