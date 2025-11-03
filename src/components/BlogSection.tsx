import Link from "next/link";
import { getAllPosts } from "next-staticblog";

export default function BlogSection({ limit }: { limit?: number }) {
  const posts = getAllPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit ?? getAllPosts().length);

  return (
    <section
      className="my-8 rounded-xl border border-gray-300 p-4"
      id="contest"
    >
      <h2 className="my-4 text-center text-4xl font-bold text-orange-500">
        部落格
      </h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="flex flex-col rounded-2xl bg-orange-50 p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold text-black">
              {post.metadata.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {post.metadata.publishedAt}
            </p>
            <p className="mt-3 text-gray-700">{post.metadata.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.metadata.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      {limit && (
        <div className="my-6 flex justify-center">
          <Link
            href="/blogs"
            className="rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-orange-600"
          >
            查看更多
          </Link>
        </div>
      )}
    </section>
  );
}
