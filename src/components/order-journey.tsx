"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STEP_MS = 4600;

const STEPS = [
  {
    title: "The order comes in",
    body: "A guest orders from your branded site — or staff rings it in at the POS. Same menu, same prices, commission-free either way.",
  },
  {
    title: "The kitchen sees it instantly",
    body: "The ticket lands on the KDS the moment it's placed. Station routing sends it to the grill — nothing re-typed, no extra tablet.",
  },
  {
    title: "Cooked, bumped, on pace",
    body: "Timers and priority alerts keep the line moving. One tap bumps the ticket the second it's up.",
  },
  {
    title: "The books are already done",
    body: "The sale flows straight into your reports — every channel in one ledger, live. Close the night without touching a spreadsheet.",
  },
];

function ShopPanel() {
  return (
    <div className="mm-promo-card">
      <div className="mm-oj-shop-hd">
        <span className="mm-sf-thumb">🍔</span>
        <div className="mm-oj-shop-meta">
          <b>The Local Burger</b>
          <span>thelocalburger.muffinmenu.com</span>
        </div>
        <span className="mm-oj-shop-tag">Online order</span>
      </div>
      <div className="mm-promo-item">
        <span className="mm-sf-thumb">🍔</span>
        <div className="mm-sf-meta">
          <span className="mm-sf-name">Double burger</span>
        </div>
        <span className="mm-sf-price">$9.50</span>
      </div>
      <div className="mm-promo-item">
        <span className="mm-sf-thumb">🍟</span>
        <div className="mm-sf-meta">
          <span className="mm-sf-name">Fries · no salt</span>
        </div>
        <span className="mm-sf-price">$4.70</span>
      </div>
      <div className="mm-oj-total">
        <span>Total</span>
        <span>$14.20</span>
      </div>
      <div className="mm-btn-primary mm-oj-place">Place order →</div>
    </div>
  );
}

function KdsPanel({ done }: { done: boolean }) {
  return (
    <div className="mm-spot-panel">
      <div className="mm-scr-top">
        <div className="mm-scr-title">
          🍳 Kitchen Display <span className="mm-live">● LIVE</span>
        </div>
        <div className="mm-dots">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="mm-tiles">
        <div className="mm-tile mm-oj-main mm-oj-hot">
          <div className="mm-tile-t">
            <span className="mm-tno">Online · #4471</span>
            {done ? (
              <span className="mm-badge mm-b-ready">Ready</span>
            ) : (
              <span className="mm-badge mm-b-new">New</span>
            )}
          </div>
          <div className="mm-li">
            <b>1×</b> Double burger
            <br />
            <b>1×</b> Fries · no salt
          </div>
          <div className="mm-oj-route">
            <span>Station · Grill</span>
            {done ? (
              <motion.span
                className="mm-oj-bumped"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 340,
                  damping: 20,
                  delay: 0.35,
                }}
              >
                ✓ Bumped · 6:42
              </motion.span>
            ) : (
              <span className="mm-oj-timer">0:04</span>
            )}
          </div>
        </div>
        <div className="mm-tile mm-oj-dim">
          <div className="mm-tile-t">
            <span className="mm-tno">Table 12</span>
            <span className="mm-badge mm-b-ready">Ready</span>
          </div>
          <div className="mm-li">
            <b>2×</b> Brisket bowl
          </div>
        </div>
        <div className="mm-tile mm-oj-dim">
          <div className="mm-tile-t">
            <span className="mm-tno">Table 07</span>
            <span className="mm-badge mm-b-cook">Cooking</span>
          </div>
          <div className="mm-li">
            <b>3×</b> Street tacos
          </div>
        </div>
      </div>
    </div>
  );
}

const BARS = [38, 52, 44, 66, 90, 74, 58];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function LedgerPanel() {
  return (
    <div className="mm-spot-panel">
      <div className="mm-scr-top">
        <div className="mm-scr-title">📊 Today · The Local Burger</div>
        <div className="mm-dots">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="mm-bars mm-oj-bars">
        {BARS.map((h, i) => (
          <div
            key={i}
            className={`mm-bar${i === 4 ? "" : " mm-dim"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mm-barx">
        {DAYS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="mm-minirow">
        <span className="mm-name">Orders today</span>
        <span>
          <motion.span
            className="mm-val"
            initial={{ color: "#34d27b", scale: 1.12 }}
            animate={{ color: "#f5f4f2", scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: "inline-block" }}
          >
            127
          </motion.span>
          <span className="mm-up">▲ just now</span>
        </span>
      </div>
      <div className="mm-minirow">
        <span className="mm-name">Online · #4471</span>
        <span>
          <span className="mm-val">$14.20</span>
          <span className="mm-up">✓ settled</span>
        </span>
      </div>
      <div className="mm-minirow">
        <span className="mm-name">On time</span>
        <span>
          <span className="mm-val">98%</span>
        </span>
      </div>
    </div>
  );
}

const PANELS = [
  <ShopPanel key="shop" />,
  <KdsPanel key="kds" done={false} />,
  <KdsPanel key="bump" done />,
  <LedgerPanel key="ledger" />,
];

export function OrderJourney() {
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const paused = !inView || hovered || !!reduced;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), STEP_MS);
    return () => clearTimeout(t);
  }, [step, paused]);

  return (
    <motion.section
      className="mm-sec"
      id="product"
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ margin: "-120px" }}
    >
      <div className="mm-wrap">
        <span className="mm-kicker">How it fits together</span>
        <h2>Follow one order all the way through.</h2>
        <p className="mm-lede">
          One guest order, four screens, nothing re-typed. This is what &ldquo;a
          platform that talks to itself&rdquo; actually means.
        </p>

        <div
          className="mm-oj"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="mm-oj-rail">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`mm-oj-step${i === step ? " mm-oj-step--on" : ""}`}
                onClick={() => setStep(i)}
                aria-current={i === step}
              >
                {i === step && !paused && (
                  <motion.span
                    key={`prog-${step}`}
                    className="mm-oj-prog"
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                  />
                )}
                <span className="mm-oj-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </button>
            ))}
          </div>

          <div className="mm-oj-stage">
            <motion.div
              key={step}
              className="mm-oj-panel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {PANELS[step]}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
