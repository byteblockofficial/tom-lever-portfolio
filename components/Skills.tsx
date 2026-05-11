const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "n8n"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub Actions", "Vercel", "Jest", "Playwright"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p className="tag" style={{ marginBottom: "1rem" }}>
        Skills
      </p>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        What I work with
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {skills.map((group) => (
          <div key={group.category} className="card">
            <p
              style={{
                color: "var(--accent-light)",
                fontWeight: 600,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              {group.category}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {group.items.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "var(--text)",
                    fontSize: "0.9rem",
                    padding: "0.3rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
