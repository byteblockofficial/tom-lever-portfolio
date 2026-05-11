export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="tag" style={{ marginBottom: "1rem" }}>About</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Building on the web since 2018
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
            I&apos;m a self-taught full-stack developer based in Manchester, UK. I
            specialise in building production-ready web apps and brochure sites for
            small businesses — fast, accessible, and built to last.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
            I founded ByteBlock to help UK small businesses get online with
            professionally built websites at an honest price. When I&apos;m not
            building for clients, I&apos;m working on side projects, tooling, and
            automation systems.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Location", value: "Manchester, UK" },
            { label: "Focus", value: "Full-stack web development" },
            { label: "Company", value: "ByteBlock (byteblock.co.uk)" },
            { label: "GitHub", value: "github.com/tomleversage" },
            { label: "Status", value: "Open to freelance & contracts" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ color: "var(--muted)" }}>{item.label}</span>
              <span style={{ color: "var(--text)", fontWeight: 500 }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
