export default function Home() {
  return (
    <main className="px-5">
      <h1>Ian Dunn</h1>
      <p className="mb-2">{"I'm a software engineer specializing in enterprise backend systems and web development."}</p>
      <section>
        <ul className="space-y-1">
          <li><a href="/resume">Resume</a></li>
          <li><a href="https://github.com/iantdunn">GitHub</a></li>
          <li><a href="https://linkedin.com/in/iantdunn/">LinkedIn</a></li>
        </ul>
      </section>
    </main>
  );
}
