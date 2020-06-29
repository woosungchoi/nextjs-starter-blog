import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "components/CodeBlock";
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)} type="image/jpeg"
	src={require(`../../content/assets/${src}?webp`)} type="image/webp" 
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
          <h1 className="my-0 pb-2 text-orange-600 font-sans" >{frontmatter.title}</h1>
          <p className="font-sans">{frontmatter.description}</p>
		  <p className="text-xs -mt-6 pb-2 font-sans">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, 
					   image: MarkdownImage, 
					   link: props => {
							if (!props.href.startsWith('http')) {
						        return props.href;
						    }
							return <a href={props.href} rel="nofollow noreferrer noopener" target="_blank">{props.children}</a>;
					   }
		  }}
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