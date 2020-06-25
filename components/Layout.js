import Link from "next/link";
import { useRouter } from "next/router";
import Bio from "components/Bio";
import SEO from "components/Seo";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1 className="mb-8">
      <Link href="/">
        <a className="text-6xl font-black text-black no-underline">
          Blog.
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-2">
      <Link href="/">
        <a className="text-2xl font-black text-black no-underline">
          Blog.
        </a>
      </Link>
    </h1>
  );

  return (
    <div className="max-w-screen-md px-4 py-8 mx-auto">
      <header>{header}</header>
	  <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, {" "}
        <a href="https://nextjs.org/" target="_blank">Next.js</a> 로 만들어졌습니다. &#128293;
      </footer>
    </div>
  );
}
