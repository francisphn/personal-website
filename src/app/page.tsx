import Link from "next/link";

export default function Home() {
  return (
    <div className="p-16 space-y-4">
      <div className="">
        <p className="font-bold text-xl">Hi! My name is Francis Phan</p>
        <p>
          I&apos;m a Computer Science student at the University of Canterbury.
        </p>
        <p>I currently work for Triage-Plus, a health startup. Once a Xero.</p>
      </div>

      <div>
        <p className="font-bold">My interests:</p>

        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            Distributed and cluster computing (Kubernetes, Google F1, Apache
            Spark)
          </li>
          <li>Parallelism and scalability</li>
          <li>Content-based recommendation systems</li>
          <li>CI/CD, CI/CD optimisation and platform observability</li>
          <li>GraphQL, ASP.NET Core and cloud security practices</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">What I'm currently playing around with...</p>

        <ul className="list-disc pl-6 space-y-1.5">
          <li>Android development</li>
          <li>AR/VR and visualisation</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Email me</p>
        <p>francis [at] phan.nz</p>
      </div>

      <div className="flex space-x-4">
        <Link
          href="https://drive.google.com/file/d/1JoQNDuJzrMtdsxmcsa42CdjgPgSnjzAK/view?usp=sharing"
          className="underline underline-offset-2 text-blue-700 hover:text-black"
        >
          CV
        </Link>

        <Link
          href="https://github.com/francisphn"
          className="underline underline-offset-2 text-blue-700 hover:text-black"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};
