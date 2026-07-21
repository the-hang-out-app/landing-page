import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

/**
 * FAQ accordion (PRD §5.6) — native <details>/<summary> so it's
 * keyboard-accessible and works without JS.
 */
export function Faq() {
  return (
    <section className="band faq-band" id="faq">
      <div className="wrap">
        <div className="center">
          <span className="kick reveal">FAQ</span>
          <h2
            className="sec reveal d1"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Answered before you had to ask
          </h2>
        </div>
        <div className="faq reveal d2">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                {item.q}
                <span className="faq-x" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-a">
                <p>
                  {item.a}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href}>{item.link.label} →</Link>
                    </>
                  )}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
