const PILLS: { label: string; glyph: React.ReactNode }[] = [
  {
    label: "Students",
    glyph: (
      <>
        <path d="M12 2.5l9.5 4.2L12 11 2.5 6.7 12 2.5z" />
        <path d="M6.5 8.5v4.4c0 1.2 2.6 2.6 5.5 2.6s5.5-1.4 5.5-2.6V8.5" />
      </>
    ),
  },
  { label: "Nurses", glyph: <path d="M12 5.5v13M5.5 12h13" /> },
  { label: "Freelancers", glyph: <path d="M13 3L5 13h5l-1 8 8-10h-5l1-8z" /> },
  {
    label: "Night shift",
    glyph: <path d="M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.6 6.6 0 0 0 9.7 9.7z" />,
  },
];

export function TrustStrip() {
  return (
    <section className="trust">
      <div className="wrap">
        <span className="lab">Built for people who work odd hours</span>
        {PILLS.map((p) => (
          <span key={p.label} className="jobpill">
            <span className="ic">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {p.glyph}
              </svg>
            </span>
            {p.label}
          </span>
        ))}
      </div>
    </section>
  );
}
