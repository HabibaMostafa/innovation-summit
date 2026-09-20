import Link from "next/link";
import SpeakerGallery from "@/components/SpeakerGallery";
import { speakers } from "@/components/speakerData";

const REGISTER_URL = "https://www.eventbrite.ca/e/max-innovation-summit-tickets-1994514499559";

export default function SpeakersPage() {
  return (
    <main className="speakers-page">
      <div className="aurora-global" aria-hidden="true">
        <span className="s1" /><span className="s2" /><span className="s3" />
        <span className="s4" /><span className="s5" /><span className="s6" /><span className="s7" />
      </div>
      <nav>
        <div className="wrap">
          <Link className="nav-mark" href="/">MAX<span>Pitch</span> Innovation Summit</Link>
          <div className="nav-links">
            <Link className="nav-link active" href="/speakers">Speakers</Link>
            <a className="nav-cta" href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Reserve a seat</a>
          </div>
        </div>
      </nav>

      <section className="speakers-page-hero">
        <div className="wrap">
          <Link className="back-link" href="/">← Back to summit</Link>
          <p className="eyebrow">01 / The people in the room</p>
          <h1>Meet the <span>speakers</span></h1>
          <p className="speakers-page-intro">Builders, investors and leaders shaping what comes next across technology, capital and Canada&apos;s innovation ecosystem.</p>
        </div>
      </section>

      <section className="speaker-directory">
        <div className="wrap">
          <SpeakerGallery speakers={speakers} />
        </div>
      </section>
      <footer>MAXPITCH INNOVATION SUMMIT 2026 · TORONTO</footer>
    </main>
  );
}