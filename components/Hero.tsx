export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 1.5rem",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <div>
        <p className="tag" style={{ marginBottom: "1.5rem" }}>
          Available for new projects
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--text)",
          }}
        >
          Hi, I&apos;m Tom.
          <br />
          <span style={{ color: "var(--accent-light)" }}>Full-stack</span>
          <br />
          developer.
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--muted)",
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          I build fast, modern web products for businesses across the UK.
          Based in Manchester — founder of{" "}
          <a
            href="https://byteblock.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-light)", textDecoration: "none" }}
          >
            ByteBlock
          </a>
          .
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
