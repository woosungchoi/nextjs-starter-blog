import Link from "next/link";

import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";
import CoverImage from 'components/coverimage'

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      {posts.map(({ frontmatter: { title, description, date, coverImage }, slug }) => (
        <article key={slug}>
          <header>
            <h3 className="mb-1">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-3xl text-orange-600 no-underline">{title}</a>
			  </Link>
            </h3>
			<p className="font-sans mb-1">{description}</p>
            <p className="text-xs font-sans mb-4">{date}</p>
			<CoverImage slug={slug} title={title} src={coverImage} />
          </header>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
