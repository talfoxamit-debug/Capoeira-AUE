import { faq } from "@/lib/content";
import { ChevronDown } from "./Icons";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="section-title">{faq.heading}</h2>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {faq.items.map((item, i) => (
              <details className="faq-item" key={i} name="faq">
                <summary>
                  {item.question}
                  <ChevronDown className="chev" width={20} height={20} />
                </summary>
                <div className="faq-item__body">{item.answer}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
