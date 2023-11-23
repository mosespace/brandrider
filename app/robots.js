export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://brandriderug.vercel.app/sitemap.xml",
  };
}
