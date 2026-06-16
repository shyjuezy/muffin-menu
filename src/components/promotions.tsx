"use client";

import { motion } from "motion/react";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Promotions() {
  return (
    <section className="mm-sec" id="promotions">
      <div className="mm-wrap">
        <div className="mm-promo">
          <motion.div
            className="mm-promo-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mm-kicker">Built-in promotions</span>
            <h2>Run a promo. Watch it apply itself.</h2>
            <p className="mm-lede">
              Spin up a discount in seconds. It shows up as a banner on your
              storefront, on the right menu cards, and applies automatically at
              checkout — no codes to chase, no spreadsheets to reconcile.
            </p>
            <ul className="mm-glist">
              {[
                "Banner, menu badge & checkout — all from one promo",
                "Percentage, fixed-amount, or first-order offers",
                "Live the moment you publish, off the moment you pause",
              ].map((p) => (
                <li key={p}>
                  <span className="mm-ck">✓</span> {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mm-promo-stage"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.18 }}
          >
            {/* Storefront with promo banner */}
            <motion.div
              className="mm-promo-card"
              variants={reveal}
              transition={{ duration: 0.45 }}
            >
              <motion.div
                className="mm-promo-banner"
                initial={{ opacity: 0, scale: 0.9, y: -8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                }}
              >
                <span className="mm-promo-spark">🎉</span>
                <span>
                  <b>20% off</b> your first order
                </span>
                <motion.span
                  className="mm-promo-code"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  WELCOME20
                </motion.span>
              </motion.div>

              <div className="mm-promo-item">
                <span className="mm-sf-thumb">🧁</span>
                <div className="mm-sf-meta">
                  <span className="mm-sf-name">Triple-Choc Muffin</span>
                  <span className="mm-promo-badge">20% off applied</span>
                </div>
                <span className="mm-sf-price">$4.95</span>
              </div>
              <div className="mm-promo-item">
                <span className="mm-sf-thumb">☕</span>
                <div className="mm-sf-meta">
                  <span className="mm-sf-name">Cold Brew</span>
                  <span className="mm-promo-badge">20% off applied</span>
                </div>
                <span className="mm-sf-price">$3.75</span>
              </div>
            </motion.div>

            {/* Floating checkout receipt */}
            <motion.div
              className="mm-promo-receipt"
              variants={reveal}
              transition={{ duration: 0.45 }}
            >
              <div className="mm-promo-rtitle">Checkout</div>
              <div className="mm-promo-rrow">
                <span>Subtotal</span>
                <span>$8.70</span>
              </div>
              <motion.div
                className="mm-promo-rrow mm-promo-rdiscount"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span>WELCOME20</span>
                <span>−$1.74</span>
              </motion.div>
              <div className="mm-promo-rrow mm-promo-rtotal">
                <span>Total</span>
                <motion.span
                  initial={{ scale: 1.18, color: "#34d27b" }}
                  whileInView={{ scale: 1, color: "#1a1206" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  $6.96
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
