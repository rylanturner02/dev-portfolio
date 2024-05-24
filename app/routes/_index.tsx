import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Rylan Turner Dev Portfolio" }
  ];
};

interface CardProps {
  repoName: string;
  description: string;
  tags: string[];
}

function Card({ repoName, description, tags } : CardProps) {
  return (
    <div className="card bg-base-300 w-80 shadow-xl mb-5">
      <div className="card-body">
        <h2 className="card-title">{repoName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map(tag => <div className="badge badge-outline bg-primary">{tag}</div>)}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div style={{ fontFamily: "Averia Serif Libre, serif", lineHeight: "1.8", padding: "20px" }}>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="navbar bg-primary">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Rylan Turner&apos;s Portfolio</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>
      </header>
      
      <div className="mt-16 mb-5">
        <p>{"Welcome to my developer portfolio!"}</p>
        <p><i>This website is currently under development, so feel free to track changes on my GitHub repo, listed below.</i></p>
      </div>
      
      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic">About Me</h2>
        <p>{"I'm a new graduate of the University of Illinois, and I specialize in software engineering and distributed systems."}</p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 className="text-2xl font-bold italic mb-5">Projects</h2>
        <Card repoName="classic-search" description="Chrome extension that filters Google search queries by Web-results only." tags={["Chrome", "JSON"]} />
        <Card repoName="dev-portfolio" description="The Remix project for this very page!" tags={["React", "Remix", "TypeScript"]} />
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
