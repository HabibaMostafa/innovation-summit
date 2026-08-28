import Image from "next/image";
import RevealObserver from "@/components/RevealObserver";

const REGISTER_URL =
  "https://www.eventbrite.ca/e/max-innovation-summit-tickets-1994514499559";

const speakers = [
  {
    name: "Bilal Khan",
    title: "General Partner",
    company: "Intuition Capital",
    image: "/speakers/bilal-khan.jpg",
  },
  {
    name: "Aiman Khan",
    title: "VP, Engineering",
    company: "AtkinsRéalis",
    image: "/speakers/aiman-khan.png",
  },
  {
    name: "Taha Mubashir",
    title: "Partner",
    company: "Inovia Capital",
    image: "/speakers/taha-mubashir.png",
  },
  {
    name: "Sami Khoury",
    title: "Senior Official for Cyber Security",
    company: "Government of Canada",
    image: "/speakers/sami-khoury.jpg",
  },
  {
    name: "Amin Lalji",
    title: "Strategic Advisor",
    company: "Wildeboer Dellelce LLP",
    image: "/speakers/amin-lalji.jpg",
  },
  {
    name: "Kazim Agha",
    title: "Partner",
    company: "Aird & Berlis LLP",
    image: "/speakers/kazim-agha.jpg",
  },
  {
    name: "Felicia Parker",
    title: "Managing Partner",
    company: "Ventioneers",
    image: "/speakers/felicia-parker.png",
  },
  {
    name: "Danish Yusuf",
    title: "CEO and Founder",
    company: "Zensurance",
    image: "/speakers/danish-yusuf.jpeg",
  },
  {
    name: "Mohamed Soliman",
    title: "Managing Partner",
    company: "Ventioneers",
    image: "/speakers/mohamed-soliman.png",
  },
  {
    name: "Dr. Suleiman Furmli",
    title: "Investor + Physician",
    company: "",
    image: "/speakers/suleiman-furmli.jpg",
  },
  {
    name: "Amin Jagani",
    title: "Managing Director",
    company: "HYGEIA",
    image: "/speakers/amin-jagani.jpg",
  },
  {
    name: "Aaqib Azeem",
    title: "Global AI & ML Partner Lead",
    company: "Google",
    image: "/speakers/aaqib-azeem.jpeg",
  },
  {
    name: "Minaz Merali",
    title: "VP, Z Cyber Security",
    company: "IBM",
    image: "/speakers/minaz-merali.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* Aurora backdrop */}
      <div className="aurora-global">
        <span className="s1" />
        <span className="s2" />
        <span className="s3" />
        <span className="s4" />
        <span className="s5" />
        <span className="s6" />
        <span className="s7" />
      </div>

      {/* NAV */}
      <nav>
        <div className="wrap">
          <div className="nav-mark">
            MAX<span>Pitch</span> Innovation Summit
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              className="nav-cta"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a seat
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <svg
          className="hero-skyline"
          viewBox="0 0 1180 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#33392c" opacity="0.55">
            <rect x="0" y="140" width="60" height="80" />
            <rect x="70" y="110" width="55" height="110" />
            <rect x="135" y="150" width="50" height="70" />
            <rect x="600" y="130" width="60" height="90" />
            <rect x="670" y="150" width="55" height="70" />
            <polygon points="760,220 800,220 782,60 778,60" />
            <ellipse cx="780" cy="60" rx="16" ry="7" />
            <rect x="900" y="120" width="60" height="100" />
            <rect x="970" y="145" width="55" height="75" />
            <rect x="1040" y="100" width="60" height="120" />
            <rect x="1110" y="150" width="50" height="70" />
          </g>
        </svg>
        <div className="wrap">
          <Image
            className="hero-mark"
            src="/leaf-toronto.png"
            alt="MAXPitch logo"
            width={200}
            height={64}
            priority
            style={{ height: "64px", width: "auto" }}
          />
          <h1>
            <span className="line-gold">Innovation</span>
            <span className="line-ink">Summit 2026</span>
          </h1>
          <p className="hero-sub">
            <strong className="hero-tagline">Building the future, now.</strong>
            <br />
            <br />
            Bringing together investors, founders, ecosystem supporters and
            subject matter experts across our community to answer the one
            question: how do we build a stronger, more connected ecosystem that
            builds the next frontier of innovation for our world?
          </p>
          <div className="hero-meta">
            <div className="meta-item">SAT, NOV 7</div>
            <div className="meta-item">10 AM &ndash; 8 PM</div>
            <div className="meta-item">Toronto</div>
          </div>
          <div className="hero-cta-row">
            <a
              className="btn-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a seat →
            </a>
            <a className="btn-ghost" href="#agenda">
              See the agenda
            </a>
          </div>
        </div>
      </section>

      {/* LIGHT ZONE */}
      <div className="light-zone">
        {/* MISSION */}
        <section className="mission-section">
          <div className="wrap">
            <p className="mission reveal">
              This isn&rsquo;t a conference of <em>buzzwords</em>. We&rsquo;re
              going deep on the technical, regulatory, and capital infrastructure
              required to compete in the world of tomorrow.
            </p>
            <p className="mission-p2 reveal">
              From AI and compute, to critical materials and energy, to
              sovereignty tech, to biotech, we&rsquo;re bringing together
              the founders who can build in these space and the investors and
              experts who can back them up.
            </p>
          </div>
        </section>

        {/* PILLARS */}
        <section className="pillars">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>The four fronts</h2>
              <span className="num">01 / PANELS</span>
            </div>
          </div>
          <div className="wrap">
            <div className="pillar-grid reveal">
              <div className="pillar" style={{ ["--pillar-color" as string]: "#a67a8a" }}>
                <span className="idx">01</span>
                <span className="tag">Panel 01</span>
                <h3>Disruptive Frontiers: AI, Computing and Beyond</h3>
              </div>
              <div className="pillar" style={{ ["--pillar-color" as string]: "#8f6a86" }}>
                <span className="idx">02</span>
                <span className="tag">Panel 02</span>
                <h3>
                  Physical Infrastructure: Hard Assets in Energy, Materials
                  and Mining as Critical Bottlenecks
                </h3>
              </div>
              <div className="pillar" style={{ ["--pillar-color" as string]: "#9c7a94" }}>
                <span className="idx">03</span>
                <span className="tag">Panel 03</span>
                <h3>
                  Emerging Innovation: Regulatory, Space, Cybersecurity and
                  Sovereignty
                </h3>
              </div>
              <div className="pillar" style={{ ["--pillar-color" as string]: "#8a5a78" }}>
                <span className="idx">04</span>
                <span className="tag">Panel 04</span>
                <h3>Beyond Healthtech: Biotech, Genetics and Longevity</h3>
              </div>
            </div>
          </div>
        </section>

        {/* WORKSHOPS */}
        <section className="workshops">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>The workshops</h2>
              <span className="num">02 / WORKSHOPS</span>
            </div>
          </div>
          <div className="wrap">
            <div className="workshop-grid reveal">
              <div className="workshop-card">
                <div className="workshop-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.5"
                      y="7"
                      width="19"
                      height="10"
                      rx="1.5"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.3"
                      stroke="#73405a"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M5.5 9.2h.01M18.5 14.8h.01"
                      stroke="#73405a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="tag">Workshop 01</span>
                <h3>The Angel Investing Playbook</h3>
                <p className="hook">
                  &ldquo;Would you write this cheque?&rdquo; Step into the shoes
                  of an angel investor and evaluate real-world startup
                  opportunities. Fully interactive.
                </p>
                <p className="takeaway">
                  <b>The challenge:</b> Invest, pass, or negotiate, then
                  defend your decision.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 3.5a4 4 0 0 0-5.4 4.9L3 14.5V19h4.5l6.1-6.1a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6Z"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="tag">Workshop 02</span>
                <h3>The AI Builder Lab (Claude and Replit)</h3>
                <p className="hook">
                  Idea to product in 90 minutes. Don&rsquo;t just build faster.
                  Build with proof.
                </p>
                <p className="takeaway">
                  <b>The challenge:</b> Bring a problem. Leave with a tested
                  methodology.
                </p>
              </div>
              <div className="workshop-card">
                <div className="workshop-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3h7l4 4v14H7V3Z"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 3v4h4"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 9h2.5M9.5 12h5M9.5 15h5"
                      stroke="#73405a"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="tag">Workshop 03</span>
                <h3>Behind the Term Sheet</h3>
                <p className="hook">
                  Negotiation, leverage and lessons learnt: an honest
                  look at fundraising with exited founders.
                </p>
                <p className="takeaway">
                  <b>Takeaway:</b> Practical lessons you won&rsquo;t find in
                  blog posts or startup Twitter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ATTEND */}
        <section className="why">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Why attend</h2>
              <span className="num">03 / VALUE</span>
            </div>
          </div>
          <div className="wrap">
            <div className="why-grid reveal">
              <div className="why-card">
                <span className="tag">Frontier voices</span>
                <p>
                  Hear from <b>operators and investors</b> working at the edge
                  of AI/compute, materials &amp; energy, cybersecurity &amp;
                  regulatory tech, and biotech.
                </p>
              </div>
              <div className="why-card">
                <span className="tag">Hands-on</span>
                <p>
                  Get into the room for workshops on <b>angel investing</b>,
                  building in Canada, working hands-on with Claude, and how to
                  actually read a term sheet.
                </p>
              </div>
              <div className="why-card">
                <span className="tag">No fluff</span>
                <p>
                  Watch founders pitch live in a{" "}
                  <b>5-minute lightning round</b>: hard stop, real
                  feedback, no filler.
                </p>
              </div>
              <div className="why-card">
                <span className="tag">Real relationships</span>
                <p>
                  Find your <b>investor, client or co-founder</b> over lunch, or
                  praying next to you. We anchor our building in our faith.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="who">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Who&rsquo;s in the room</h2>
              <span className="num">04 / AUDIENCE</span>
            </div>
            <div className="who-grid reveal">
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C12 2 17 5 17 11C17 13.5 15.8 15.6 14.5 17L12 22L9.5 17C8.2 15.6 7 13.5 7 11C7 5 12 2 12 2Z"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <h3>Founders at any stage</h3>
              </div>
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 7v10M9.5 9.5c0-1.4 1.1-2.2 2.5-2.2s2.5.8 2.5 2c0 1.6-2 2-2.5 2.7-.3.4-.3.8-.3 1.3M9 15c0 1.4 1.3 2.2 3 2.2s3-.8 3-2.2"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Angel investors</h3>
              </div>
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 21V9l8-5 8 5v12"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 21v-6h6v6M9 12h.01M15 12h.01M9 8h.01M15 8h.01"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Institutional investors</h3>
              </div>
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Operators exploring the leap</h3>
              </div>
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 8 4 12l5 4M15 8l5 4-5 4M13 6l-2 12"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Engineers &amp; technical builders</h3>
              </div>
              <div className="who-card">
                <div className="who-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="5"
                      r="2"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="5"
                      cy="17"
                      r="2"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="19"
                      cy="17"
                      r="2"
                      stroke="#73405a"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 7v5m0 0-5.5 4M12 12l5.5 4"
                      stroke="#73405a"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Canada&rsquo;s tech ecosystem</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKERS */}
        <section className="speakers">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Speakers</h2>
              <span className="num">05 / SPEAKERS</span>
            </div>
          </div>
          <div className="speaker-marquee reveal">
            <div className="speaker-track">
              {[...speakers, ...speakers].map((s, i) => (
                <div className="speaker-card" key={`${s.name}-${i}`}>
                  <div className="speaker-photo">
                    <Image src={s.image} alt={s.name} width={96} height={96} />
                  </div>
                  <h3>{s.name}</h3>
                  <p className="role">{s.title}</p>
                  {s.company && <p className="company">{s.company}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGENDA */}
        <section className="agenda" id="agenda">
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Full agenda</h2>
              <span className="num">9:30 &ndash; 20:00</span>
            </div>
            <div className="timeline reveal">
              <div className="t-item">
                <span className="t-time">9:30 AM</span>
                <div className="t-body">
                  <h4>Registration</h4>
                </div>
              </div>
              <div className="t-item">
                <span className="t-time">10:00 &ndash; 10:30 AM</span>
                <div className="t-body">
                  <h4>Welcome and Opening Remarks</h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">10:30 &ndash; 11:00 AM</span>
                <div className="t-body">
                  <h4>
                    Panel 1: Disruptive Frontiers, Beyond AI &amp;
                    Computing
                  </h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">11:00 &ndash; 11:30 AM</span>
                <div className="t-body">
                  <h4>
                    Panel 2: Physical Infrastructure, Energy, Materials
                    and Mining as Critical Bottlenecks
                  </h4>
                </div>
              </div>
              <div className="t-item">
                <span className="t-time">11:30 AM &ndash; 12:30 PM</span>
                <div className="t-body">
                  <h4>Prayer Break + Lunch</h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">12:30 &ndash; 1:00 PM</span>
                <div className="t-body">
                  <h4>
                    Panel 3: Emerging Innovation, Space, Regulatory &amp;
                    Sovereignty Technologies
                  </h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">1:00 &ndash; 1:30 PM</span>
                <div className="t-body">
                  <h4>
                    Panel 4: Beyond Healthtech, Biotech, Genetics and
                    Longevity
                  </h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">1:45 &ndash; 3:30 PM</span>
                <div className="t-body">
                  <h4>Workshop Sessions</h4>
                  <div className="t-sub">
                    <div>The Angel Investing Playbook</div>
                    <div>The AI Builder Lab (Claude and Replit)</div>
                    <div>Behind the Term Sheet</div>
                  </div>
                </div>
              </div>
              <div className="t-item">
                <span className="t-time">3:30 &ndash; 4:00 PM</span>
                <div className="t-body">
                  <h4>Prayer Break</h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">4:00 &ndash; 4:30 PM</span>
                <div className="t-body">
                  <h4>Fireside Chat: Collectively Building the Future</h4>
                </div>
              </div>
              <div className="t-item highlight">
                <span className="t-time">4:30 &ndash; 5:45 PM</span>
                <div className="t-body">
                  <h4>Lightning Round Pitches: Founders in Action</h4>
                </div>
              </div>
              <div className="t-item">
                <span className="t-time">5:45 &ndash; 6:00 PM</span>
                <div className="t-body">
                  <h4>Closing Remarks</h4>
                </div>
              </div>
              <div className="t-item">
                <span className="t-time">6:00 &ndash; 8:00 PM</span>
                <div className="t-body">
                  <h4>Open Networking + Dinner</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CLOSING */}
      <section className="closing" id="register">
        <div className="wrap">
          <span className="eyebrow reveal">
            One day. Four fronts. One ecosystem.
          </span>
          <h2 className="reveal" style={{ marginTop: "14px" }}>
            Be in the room.
          </h2>
          <p className="reveal">
            We are bringing the best founders, investors and experts together in
            one room to build the future <em>together</em>.
          </p>
          <div className="hero-cta-row reveal">
            <a
              className="btn-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a seat →
            </a>
          </div>
        </div>
      </section>

      <footer style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
        MAXPITCH INNOVATION SUMMIT · 2026 · TORONTO ·
        <Image
          src="/hero-mark.png"
          alt="MAXPitch"
          width={80}
          height={20}
          style={{ height: "18px", width: "auto" }}
        />
      </footer>
    </>
  );
}
