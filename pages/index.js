// pages/index.js

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo-block">
            {/* Replace this circle with your actual logo image when you're ready */}
            <div className="logo-circle">
              <span className="logo-icon">💡</span>
            </div>
            <div className="logo-text">
              <h1>Elevora Industries</h1>
              <p className="tagline">Elevate how your business is seen.</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h2>
                Brand clarity for{" "}
                <span className="accent">small & local businesses.</span>
              </h2>
              <p className="hero-subtitle">
                Elevora Industries helps you sharpen your identity, improve how
                customers see you, and create practical paths for growth—without
                the overwhelm.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get a free discovery call
                </a>
                <a href="#services" className="btn btn-ghost">
                  See what we do
                </a>
              </div>
              <p className="hero-note">
                Bilingual support (English & Spanish) • Made for real small
                businesses, not just big brands.
              </p>
            </div>

            <div className="hero-card">
              <h3>What we help you with</h3>
              <ul>
                <li>✔ Clear, confident brand identity</li>
                <li>✔ Simple, organized online presence</li>
                <li>✔ Messaging that actually connects</li>
                <li>✔ Practical steps you can maintain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Services for growing businesses</h2>
            <p className="section-intro">
              Every business is different, but the core problems are the same:
              unclear identity, scattered presence, and confusing messaging. We
              help you fix that.
            </p>

            <div className="grid">
              <div className="card">
                <h3>Brand Identity & Positioning</h3>
                <p>
                  Clarify who you are, who you serve, and how you want to be
                  seen. We help you define brand foundations, language, and
                  visual direction.
                </p>
                <ul className="bullet-list">
                  <li>Brand story & key messaging</li>
                  <li>Target audience clarity</li>
                  <li>Tone & voice guidelines</li>
                </ul>
              </div>

              <div className="card">
                <h3>Web Presence & Structure</h3>
                <p>
                  Turn “we know we need a website” into a focused, practical
                  online hub that actually supports your business goals.
                </p>
                <ul className="bullet-list">
                  <li>Simple, strategic site structure</li>
                  <li>Landing pages that make sense</li>
                  <li>Clear paths to contact or book</li>
                </ul>
              </div>

              <div className="card">
                <h3>Practical Growth Systems</h3>
                <p>
                  No fluff. Just usable systems and routines you can keep
                  running, even while you’re busy serving customers.
                </p>
                <ul className="bullet-list">
                  <li>Basic marketing workflows</li>
                  <li>Customer touchpoint improvements</li>
                  <li>Lightweight content plans</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="section section-alt">
          <div className="container">
            <h2 className="section-title">How working with us feels</h2>
            <p className="section-intro">
              Our process is designed to feel clear and human—not corporate or
              confusing.
            </p>

            <div className="timeline">
              <div className="timeline-step">
                <span className="step-number">1</span>
                <div>
                  <h3>Discovery & Clarity Call</h3>
                  <p>
                    We talk about your business, your community, and where
                    things feel stuck. You share your goals; we listen first.
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <span className="step-number">2</span>
                <div>
                  <h3>Brand & Presence Blueprint</h3>
                  <p>
                    You get a simple plan that outlines your brand direction,
                    key messages, and online structure—no jargon, no 30-page
                    pdfs.
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <span className="step-number">3</span>
                <div>
                  <h3>Build, Refine, Elevate</h3>
                  <p>
                    We help you implement: updating copy, refining visuals, or
                    guiding your web build so everything feels consistent and
                    intentional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <h2 className="section-title">Built for real small businesses</h2>
              <p>
                Elevora Industries exists for the owner who’s wearing every
                hat: sales, service, operations, and somehow “marketing” too.
              </p>
              <p>
                We blend thoughtful branding, simple strategic structure, and
                modern marketing insight to help you show up with confidence and
                communicate your value clearly—without feeling like you need a
                corporate marketing department.
              </p>
              <p>
                Whether you’re building from the ground up or refining what you
                already have, our focus is on making brand development feel{" "}
                <strong>approachable, not overwhelming.</strong>
              </p>
            </div>

            <div className="about-highlight">
              <h3>What clients appreciate</h3>
              <ul className="checklist">
                <li>Plain-language explanations, not jargon</li>
                <li>Respect for your culture & community</li>
                <li>Support in English and Spanish</li>
                <li>Systems you can actually keep using</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contact" className="section section-cta">
          <div className="container cta-inner">
            <div>
              <h2 className="section-title">Ready to elevate your presence?</h2>
              <p className="section-intro">
                Share a bit about your business, and we’ll follow up with a
                short list of ways we can help—no pressure, no hard sell.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Form submitted! Connect this to your email or a form service later."
                );
              }}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="business">Business name</label>
                <input id="business" name="business" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  What are you hoping to improve or build?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Example: We need a clearer brand and a simple website that doesn't confuse people."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Send my message
              </button>

              <p className="small-print">
                Prefer WhatsApp or phone? Add your number in the message, and we
                can reach out that way.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Elevora Industries. All rights reserved.</p>
          <p className="footer-note">
            Branding • Structure • Strategy — for small and local businesses.
          </p>
        </div>
      </footer>
    </>
  );
}
