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
        <p>{"Welcome to my developer portfolio! This website is currently under development, so feel free to track changes on my GitHub repo, listed below."}</p>
      </header>
      
      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic">About Me</h2>
        <p>{"I'm a new graduate of the University of Illinois, and I specialize in software engineering and distributed systems."}</p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic">Projects</h2>
        <ul>
          <li>
            <strong>Project One</strong> - <a href="https://github.com/rylanturner02/classic-search" target="_blank" rel="noreferrer">GitHub Repo</a>
            <p>A brief description of what this project does and the technologies used.</p>
          </li>
          <li>
            <strong>Project Two</strong> - <a href="https://github.com/rylanturner02/dev-portfolio" target="_blank" rel="noreferrer">GitHub Repo</a>
            <p>A brief description of what this project does and the technologies used.</p>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic">Skills</h2>
        <p>...</p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic">Contact</h2>
        <p>If you&apos;d like to get in touch, feel free to reach out via email at <a href="mailto:rylanturner02@gmail.com">rylanturner02@gmail.com</a>.</p>
      </section>

      <footer style={{ borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <p>&copy; 2024 Rylan Turner. All rights reserved.</p>
      </footer>
    </div>
  );
}
