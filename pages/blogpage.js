// pages/blog.js
import Link from "next/link";
import "@fontsource/ibm-plex-mono";
import { getAllPosts } from "../lib/posts"; // Ensure this function is correctly fetching your posts
import Layout from "../components/Layout";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="flex flex-col  items-center justify-start my-11 pt-20">
        <div className="w-full max-w-2xl space-y-6">
          {" "}
          {/* Adjust space between posts */}
          <div className="flex flex-col items-start justify-start min-h-screen space-y-4">
            {" "}
            {/* Adds spacing between each post */}
            {posts.map((post) => (
              <div
                key={post.id}
                className="w-full p-4 border-2 border-neutral-900 rounded-lg"
              >
                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                </Link>
                <p className="text-green">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(); // This function should return an array of posts
  return { props: { posts } };
}
