import Layout from "../../components/Layout";
import { getAllPosts, getPostData } from "../../lib/posts";

export default function BlogPost({ postData }) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">
          {postData.title}
        </h1>
        <p className="text-gray-600 text-center mb-8">{postData.date}</p>
        <div
          className="prose prose-lg text-gray-800 mx-auto"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
