import { getPostBySlug, getAllPostParams } from "next-posts";
import ReactMarkdown from "react-markdown";
import { baseUrl } from "@/app/sitemap";
import { PostMeta } from "@/types/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = getPostBySlug<PostMeta>(slug);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      url: `/blog/${slug}`,
      images: `/og?title=${metadata.title}&subtitle=${metadata.description}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return getAllPostParams();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug<PostMeta>(slug);

  return (
    <div className="flex justify-center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.description,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "YD",
            },
          }),
        }}
      />
      <div className="mx-auto min-h-screen w-full max-w-prose border p-4 sm:m-4 sm:rounded-xl">
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
        <p className="text-gray-800">{metadata.publishedAt}</p>
        <div className="prose mt-4">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
