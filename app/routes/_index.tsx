import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Rylan Turner Dev Portfolio" }
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", padding: "20px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 className="text-3xl font-bold underline">Rylan Turner</h1>
        <p>{"Welcome to my developer portfolio!"}</p>
      </header>
      
      <section style={{ marginBottom: "40px" }}>
        <h2>About Me</h2>
        <p>{"I'm a passionate developer with experience in web development, specializing in modern frameworks and technologies. I enjoy creating efficient, scalable, and user-friendly applications."}</p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project One</strong> - <a href="https://github.com/yourusername/project-one" target="_blank" rel="noreferrer">GitHub Repo</a>
            <p>A brief description of what this project does and the technologies used.</p>
          </li>
          <li>
            <strong>Project Two</strong> - <a href="https://github.com/yourusername/project-two" target="_blank" rel="noreferrer">GitHub Repo</a>
            <p>A brief description of what this project does and the technologies used.</p>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Remix</li>
          <li>Node.js</li>
          <li>CSS / Sass</li>
          <li>Git / GitHub</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Contact</h2>
        <p>If you&apos;d like to get in touch, feel free to reach out via email at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
      </section>

      <footer style={{ borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <p>&copy; 2024 Rylan Turner. All rights reserved.</p>
      </footer>
    </div>
  );
}
