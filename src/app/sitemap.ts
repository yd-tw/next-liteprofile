import { getAllPosts } from "next-staticblog";

export const baseUrl = "https://test.codecat.tw";

const basePages = [
  { link: "/", priority: 1.0, changefreq: "weekly" },
  { link: "/blogs", priority: 0.8, changefreq: "weekly" },
];

export default async function sitemap() {
  // 靜態頁面
  const links = basePages.map(({ link, priority, changefreq }) => ({
    url: `${baseUrl}${link}`,
    lastModified: new Date(),
    changefreq,
    priority,
  }));

  // 部落格索引
  const posts = getAllPosts();
  posts.forEach((post) => {
    links.push({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.metadata.publishedAt),
      changefreq: "weekly",
      priority: 0.5,
    });
  });

  return links;
}
