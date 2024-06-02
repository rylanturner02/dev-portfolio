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
  const repoLink = `https://www.github.com/rylanturner02/${repoName}`;

  return (
    <div className="card bg-base-200 w-80 shadow-xl mb-5">
      <div className="card-body">
        <h2 className="card-title"><a href={repoLink} target="_blank" rel="noopener noreferrer" className="underline">{repoName}</a></h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag, index) => <div key={index} className="badge badge-outline bg-primary">{tag}</div>)}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="font-zilla-slab leading-7 p-5 md:px-16 lg:px-16">
      <header className="fixed md:px-10 lg:px-10 pt-2 bg-base-100 top-0 left-0 right-0 z-50">
        <div className="navbar">
          <div className="font-caprasimo flex-1 ml-3 sm:text-2xl md:text-3xl">Rylan Turner&apos;s Portfolio</div>
          <div className="flex-none">
            <a href="https://www.github.com/rylanturner02" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            </a>
          </div>
        </div>
      </header>
      
      <div className="mt-16 mb-5">
        <p>{"Welcome to my developer portfolio!"}</p>
        <p><i>This website is currently under development, so feel free to track changes on my GitHub repo, listed below.</i></p>
      </div>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold italic">About Me</h2>
        <p>{"I'm a new graduate of the University of Illinois, and I specialize in software engineering and distributed systems."}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold italic mb-5">Projects</h2>
        <div className="flex flex-wrap gap-x-4">
          <Card repoName="classic-search" description="Chrome extension that filters Google search queries by Web-results only." tags={["Chrome", "JSON"]} />
          <Card repoName="dev-portfolio" description="The Remix project for this very page!" tags={["React", "Remix", "TypeScript"]} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold italic">Contact</h2>
        <p>If you&apos;d like to get in touch, feel free to reach out via email at <a href="mailto:rylanturner02@gmail.com" className="underline">rylanturner02@gmail.com</a>.</p>
      </section>

      <footer className="border-solid border-t-2 border-neutral-300 pt-5 mt-44">
        <p>&copy; 2024 Rylan Turner. All rights reserved.</p>
      </footer>
    </div>
  );
}
