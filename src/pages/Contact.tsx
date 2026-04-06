import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Contact Us</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Ready to get started? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                  <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="text-neutral-600">We'll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      I am a...
                    </label>
                    <select
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                    >
                      <option value="">Select one</option>
                      <option value="employer">Employer looking for talent</option>
                      <option value="candidate">Candidate looking for opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-neutral-900 text-lg">info@bridgeko.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone</h3>
                  <p className="text-neutral-900 text-lg">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Office</h3>
                  <p className="text-neutral-900 text-lg">New York, NY</p>
                  <p className="text-neutral-600 mt-1">United States</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Hours</h3>
                  <p className="text-neutral-900">Monday - Friday</p>
                  <p className="text-neutral-600">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="mt-12 bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Quick Response</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We typically respond within 1 business day. For urgent hiring needs,
                  please mention it in your message and we'll prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
