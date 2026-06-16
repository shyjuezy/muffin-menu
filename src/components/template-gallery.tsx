"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type TemplateKey = "minimalist" | "playful" | "hybrid" | "warm" | "luxe";

interface Template {
  key: TemplateKey;
  name: string;
  tagline: string;
  blurb: string;
  shot: string;
  alt: string;
  highlights: string[];
}

const TEMPLATES: Template[] = [
  {
    key: "minimalist",
    name: "Minimalist",
    tagline: "Clean, calm, content-first.",
    blurb:
      "Generous whitespace, an elegant display serif, and a single warm accent. For places that let the food do the talking.",
    shot: "/templates/tpl-minimalist.webp",
    alt: "Minimalist storefront template preview",
    highlights: [
      "Editorial whitespace",
      "Refined display serif",
      "One warm accent",
    ],
  },
  {
    key: "playful",
    name: "Playful",
    tagline: "Bold, bouncy, full of character.",
    blurb:
      "Rounded type, vivid color, and a lively photo mosaic. Built to feel fun the second the page loads.",
    shot: "/templates/tpl-playful.webp",
    alt: "Playful storefront template preview",
    highlights: [
      "Rounded, friendly type",
      "Vibrant color pops",
      "Photo-mosaic hero",
    ],
  },
  {
    key: "hybrid",
    name: "Signature",
    tagline: "Polished, structured, conversion-ready.",
    blurb:
      "The balanced flagship — confident serif headlines, calm spacing, and a layout tuned to turn browsers into orders.",
    shot: "/templates/tpl-signature.webp",
    alt: "Signature storefront template preview",
    highlights: [
      "Confident editorial type",
      "Calm, premium spacing",
      "Tuned for conversion",
    ],
  },
  {
    key: "warm",
    name: "Warm Earth",
    tagline: "Earthy, artisanal, organic.",
    blurb:
      "Ivory and terracotta with an ornate Playfair serif. A cozy, crafted feel for kitchens that lean into warmth.",
    shot: "/templates/tpl-warm.webp",
    alt: "Warm Earth storefront template preview",
    highlights: [
      "Warm ivory + terracotta",
      "Ornate display serif",
      "Cozy and inviting",
    ],
  },
  {
    key: "luxe",
    name: "Modern Luxe",
    tagline: "Refined, premium, cinematic.",
    blurb:
      "A full-bleed hero with an emerald wash and elegant serif type. For an elevated, boutique-restaurant feel.",
    shot: "/templates/tpl-luxe.webp",
    alt: "Modern Luxe storefront template preview",
    highlights: [
      "Cinematic full-bleed hero",
      "Elegant serif over image",
      "Boutique, high-end feel",
    ],
  },
];

export function TemplateGallery() {
  const [active, setActive] = useState<TemplateKey>("playful");
  const current = TEMPLATES.find((t) => t.key === active)!;

  return (
    <section className="mm-sec" id="templates">
      <div className="mm-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="mm-kicker">Make it yours</span>
          <h2>One menu. Pick the look that fits your brand.</h2>
          <p className="mm-lede">
            Every MuffinMenu storefront ships with switchable templates. Same
            menu and ordering — a completely different feel. Tap through them.
          </p>
        </motion.div>

        <div
          className="mm-gtabs"
          role="tablist"
          aria-label="Storefront templates"
        >
          {TEMPLATES.map((t) => {
            const on = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={on}
                className={`mm-gtab${on ? " mm-gtab--on" : ""}`}
                onClick={() => setActive(t.key)}
              >
                {on && (
                  <motion.span
                    layoutId="mm-gtab-pill"
                    className="mm-gtab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="mm-gtab-label">{t.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mm-gallery">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="mm-gallery-copy"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <span className="mm-gtag">{current.tagline}</span>
              <h3>{current.name}</h3>
              <p>{current.blurb}</p>
              <ul className="mm-glist">
                {current.highlights.map((h) => (
                  <li key={h}>
                    <span className="mm-ck">✓</span> {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mm-gallery-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="mm-gallery-frame"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.4, ease: EASE }}
                whileHover={{ y: -6 }}
              >
                <div className="mm-sf-chrome">
                  <i />
                  <i />
                  <i />
                  <span className="mm-sf-url">
                    saffronandspice.muffinmenu.com
                  </span>
                </div>
                <div className="mm-gallery-shot">
                  <Image
                    src={current.shot}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 900px) 92vw, 560px"
                    className="mm-gallery-shot-img"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
