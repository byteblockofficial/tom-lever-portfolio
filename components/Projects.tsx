const projects = [
  {
    name: "ByteBlock",
    description:
      "Freelance web development agency site. Built with Next.js, Tailwind, and DaisyUI. Showcases services, portfolio, and enquiry form.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    url: "https://byteblock.co.uk",
    repo: "https://github.com/byteblock-co-uk/byteblock",
  },
  {
    name: "BB SaaS Assistant",
    description:
      "Multi-tenant SaaS assistant for small businesses. AI-powered chat, lead capture, and vertical-specific templates.",
    tags: ["Next.js", "Supabase", "OpenAI", "TypeScript"],
    repo: "https://github.com/byteblock-co-uk/bb-saas-assistant",
  },
  {
    name: "SDDFactory",
    description:
      "Agentic software delivery system built with GitHub Copilot. Multi-agent pipeline with design, engineering, QA, and DevOps agents.",
    tags: ["GitHub Copilot", "Agents", "Automation"],
    repo: "https://github.com/byteblock-co-uk/SDDFactory",
  },
  {
    name: "ProspectFactory",
    description:
      "Pre-sales pipeline tooling to manage and brief inbound client prospects before entering the build pipeline.",
    tags: ["Markdown", "Automation", "Agents"],
    repo: "https://github.com/byteblock-co-uk/prospect-factory",
  },
  {
    name: "Client Demo Sites",
    description:
      "Production-quality brochure sites built for UK businesses — dental, legal, electrical, yoga, and more.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Playwright"],
  },
  {
    name: "Scraper3",
    description:
      "UK local business lead generation scraper. Finds, scores, and exports businesses for outreach.",
    tags: ["Node.js", "Automation"],
    repo: "https://github.com/byteblock-co-uk/scraper3",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p className="tag" style={{ marginBottom: "1rem" }}>
        Projects
      </p>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        Things I&apos;ve built
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="card"
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--text)",
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                flex: 1,
              }}
            >
              {p.description}
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span className="tag" key={t} style={{ fontSize: "0.7rem" }}>
                  {t}
                </span>
              ))}
            </div>
            {(p.url || p.repo) && (
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent-light)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                    }}
                  >
                    Live ↗
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
