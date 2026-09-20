"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Speaker } from "@/components/speakerData";

type SpeakerGalleryProps = {
  speakers: Speaker[];
};

export default function SpeakerGallery({ speakers }: SpeakerGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setActiveIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const move = (offset: number) => {
    setDirection(offset > 0 ? "next" : "previous");
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + offset + speakers.length) % speakers.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeSpeaker = activeIndex === null ? null : speakers[activeIndex];

  return (
    <>
      <div className="speaker-grid">
        {speakers.map((speaker, index) => (
          <article className="directory-card" key={speaker.name}>
            <button
              className="directory-photo"
              type="button"
              aria-label={`Read ${speaker.name}'s biography`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setDirection("next");
                setActiveIndex(index);
              }}
            >
              <Image src={speaker.image} alt={speaker.name} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 50vw, 25vw" />
              <span className="directory-photo-cue" aria-hidden="true">View bio <span>→</span></span>
            </button>
            <h2>{speaker.name}</h2>
            <p className="directory-role">{speaker.title}</p>
            {speaker.company && <p className="directory-company">{speaker.company}</p>}
          </article>
        ))}
      </div>

      {activeSpeaker && activeIndex !== null && (
        <div
          className="speaker-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            className="speaker-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-modal-name"
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(distance) > 55) move(distance < 0 ? 1 : -1);
            }}
          >
            <button ref={closeButtonRef} className="speaker-modal-close" type="button" onClick={closeModal} aria-label="Close speaker biography">×</button>
            <button className="speaker-modal-arrow previous" type="button" onClick={() => move(-1)} aria-label="Previous speaker"><span aria-hidden="true" /></button>
            <div className={`speaker-modal-content slide-${direction}`} key={activeSpeaker.name}>
              <div className="speaker-modal-photo">
                <Image src={activeSpeaker.image} alt={activeSpeaker.name} fill sizes="(max-width: 700px) 90vw, 48vw" priority />
              </div>
              <div className="speaker-modal-bio">
                <p className="eyebrow">Meet the speaker</p>
                <h2 id="speaker-modal-name">{activeSpeaker.name}</h2>
                <p className="speaker-modal-role">{activeSpeaker.title}{activeSpeaker.company && <><span> · </span>{activeSpeaker.company}</>}</p>
                <p className="speaker-modal-copy">{activeSpeaker.bio}</p>
              </div>
            </div>
            <span className="speaker-modal-count">{String(activeIndex + 1).padStart(2, "0")} / {String(speakers.length).padStart(2, "0")}</span>
            <button className="speaker-modal-arrow next" type="button" onClick={() => move(1)} aria-label="Next speaker"><span aria-hidden="true" /></button>
          </section>
        </div>
      )}
    </>
  );
}