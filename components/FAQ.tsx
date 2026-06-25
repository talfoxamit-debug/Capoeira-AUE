"use client";

import { useSite } from "@/lib/i18n";
import { ChevronDown } from "./Icons";
import Reveal from "./Reveal";

export default function FAQ() {
  const { t } = useSite();

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="section-title">{t.faq.heading}</h2>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {t.faq.items.map((item, i) => (
              <details className="faq-item" key={i} name="faq">
                <summary>
                  {item.q}
                  <ChevronDown className="chev" width={20} height={20} />
                </summary>
                <div className="faq-item__body">{item.a}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
