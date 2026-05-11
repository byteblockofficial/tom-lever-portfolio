export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        maxWidth: 960,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.85rem",
        color: "var(--muted)",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span>© {new Date().getFullYear()} Tom Lever</span>
      <span>
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-light)", textDecoration: "none" }}
        >
          Next.js
        </a>{" "}
        &amp; Tailwind
      </span>
    </footer>
  );
}
