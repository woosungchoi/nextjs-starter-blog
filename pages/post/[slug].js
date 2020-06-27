import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CoverImage from 'components/coverimage'

import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language} style={okaidia}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className="my-0 pb-2 text-orange-600" >{frontmatter.title}</h1>
          <p className="font-sans">{frontmatter.description}</p>
		  <p className="text-xs -mt-6 font-sans">{frontmatter.date}</p>
     	  <CoverImage title={frontmatter.title} src={frontmatter.coverImage} />
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}