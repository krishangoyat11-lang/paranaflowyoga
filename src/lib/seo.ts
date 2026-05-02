const SITE_URL = "https://paranaflowyoga.in";

type PageSeoOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  type?: "website" | "article";
  image?: string;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
};

export const setPageSeo = ({
  title,
  description,
  canonicalPath,
  robots = "index, follow, max-image-preview:large",
  type = "website",
  image = `${SITE_URL}/og-image.jpg`,
}: PageSeoOptions) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath.replace(/\/$/, "")}`;

  document.title = title;
  upsertMeta('meta[name="description"]', { name: "description", content: description });
  upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
  upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
  upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" });
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
};

export const getSiteUrl = () => SITE_URL;