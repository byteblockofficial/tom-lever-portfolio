export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p className="tag" style={{ marginBottom: "1rem" }}>
        Contact
      </p>
      <div style={{ maxWidth: 560 }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s work together
        </h2>
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.75,
            marginBottom: "2rem",
          }}
        >
          I&apos;m open to freelance projects, contracts, and full-time roles.
          If you have something you&apos;d like to build, get in touch.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a
            href="mailto:tom@byteblock.co.uk"
            className="btn btn-primary"
            style={{ width: "fit-content" }}
          >
            tom@byteblock.co.uk
          </a>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://github.com/tomleversage"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
            <a
              href="https://byteblock.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              ByteBlock
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
