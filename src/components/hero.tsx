"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Tile {
  no: string;
  badge: string;
  badgeClass: string;
  items: [string, string][];
}

const TILES: Tile[] = [
  {
    no: "Table 12",
    badge: "Ready",
    badgeClass: "mm-b-ready",
    items: [
      ["2×", "Brisket bowl"],
      ["1×", "Mac & cheese"],
    ],
  },
  {
    no: "Online · #4471",
    badge: "Cooking",
    badgeClass: "mm-b-cook",
    items: [
      ["1×", "Double burger"],
      ["1×", "Fries · no salt"],
    ],
  },
  {
    no: "Table 07",
    badge: "Cooking",
    badgeClass: "mm-b-cook",
    items: [
      ["3×", "Street tacos"],
      ["2×", "Horchata"],
    ],
  },
  {
    no: "Pickup · #4472",
    badge: "New",
    badgeClass: "mm-b-new",
    items: [
      ["1×", "Caesar salad"],
      ["1×", "Lemonade"],
    ],
  },
];

const tilesContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const tileVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export function Hero() {
  return (
    <section>
      <div className="mm-hero-bg" />
      <div className="mm-wrap">
        <div className="mm-hero">
          <div>
            <span className="mm-eyebrow">
              <span className="mm-dot" /> Built for restaurant operators
            </span>
            <h1 className="mm-h1">
              Run the whole
              <br />
              restaurant.
              <br />
              <span className="mm-accent">From one screen.</span>
            </h1>
            <p className="mm-sub">
              POS, kitchen display, menus, online ordering, and reporting —{" "}
              <b>one platform that talks to itself.</b>
            </p>
            <div className="mm-cta-row">
              <Link href="/demo" className="mm-btn-primary mm-btn-lg">
                Request a demo →
              </Link>
              <Link href="#product" className="mm-btn-ghost mm-btn-lg">
                See it live
              </Link>
            </div>
          </div>

          <motion.div
            className="mm-stage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            whileHover={{ y: -6 }}
          >
            <div className="mm-device">
              <div className="mm-scr-top">
                <div className="mm-scr-title">
                  🍳 Kitchen Display{" "}
                  <span className="mm-live">
                    <motion.span
                      aria-hidden
                      animate={{ opacity: [1, 0.25, 1] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ●
                    </motion.span>{" "}
                    LIVE
                  </span>
                </div>
                <div className="mm-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <motion.div
                className="mm-tiles"
                variants={tilesContainer}
                initial="hidden"
                animate="show"
              >
                {TILES.map((tile) => (
                  <motion.div
                    className="mm-tile"
                    key={tile.no}
                    variants={tileVariant}
                  >
                    <div className="mm-tile-t">
                      <span className="mm-tno">{tile.no}</span>
                      <span className={`mm-badge ${tile.badgeClass}`}>
                        {tile.badge}
                      </span>
                    </div>
                    <div className="mm-li">
                      {tile.items.map(([qty, name], i) => (
                        <span key={name}>
                          <b>{qty}</b> {name}
                          {i < tile.items.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="mm-statbar"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.95 }}
              >
                <div className="mm-s">
                  Orders today<b>126</b>
                </div>
                <div className="mm-s">
                  Avg. ticket<b>7.4 min</b>
                </div>
                <div className="mm-s">
                  On time<b className="mm-g">98%</b>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="mm-chip mm-chip--a"
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.15, duration: 0.5, ease: EASE }}
            >
              <span className="mm-chip-dot" /> Online order just landed
            </motion.div>
            <motion.div
              className="mm-chip mm-chip--b"
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.45, duration: 0.5, ease: EASE }}
            >
              <span className="mm-chip-ck">✓</span> Bumped in 6:42
            </motion.div>
            <motion.div
              className="mm-mascot"
              initial={{ rotate: 8 }}
              animate={{ y: [0, -9, 0], rotate: [8, 11, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="mm-blob" />
              🧁
            </motion.div>
          </motion.div>
        </div>

        <div className="mm-trust">
          <span className="mm-lbl">
            Built by the team behind <b>Add4x</b>
          </span>
          <span className="mm-trust-sep" />
          <span className="mm-lbl">Now onboarding our first restaurants</span>
        </div>
      </div>
    </section>
  );
}
