export default function Home() {
  return (
    <main>
      <h1>Ian Dunn</h1>
      <p className="mb-2">{"I'm a software engineer specializing in enterprise backend systems and web development."}</p>
      <section>
        <ul className="space-y-1">
          <li><a href="/resume">Resume</a></li>
          <li><a href="/github">GitHub</a></li>
          <li><a href="/linkedin">LinkedIn</a></li>
        </ul>
      </section>
    </main>
  );
}
