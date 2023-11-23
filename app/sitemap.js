export default async function sitemap() {
  const baseUrl = "https://brandriderug.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
