// SEO utility for dynamic page metadata
export interface PageSEO {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export const pageSEOData: Record<string, PageSEO> = {
  home: {
    title: "Connect Your Assets To Digital Dollars — Albor Stablecoin Platform",
    description: "Launch your stablecoin in 90 days. Capture liquidity from the $300 Billion stablecoin market with compliant infrastructure.",
    image: "/favicon.png",
    imageAlt: "Launch Your Stablecoin with Albor"
  },
  "launch-stablecoin": {
    title: "Connect Your Assets To Digital Dollars — Albor Stablecoin Platform",
    description: "Launch your stablecoin in 90 days. Capture liquidity from the $300 Billion stablecoin market with compliant infrastructure.",
    image: "/favicon.png",
    imageAlt: "Launch Your Stablecoin with Albor"
  },
};

export function updatePageSEO(pageKey: string) {
  const seoData = pageSEOData[pageKey];
  if (!seoData) return;
  
  // Update document title
  document.title = seoData.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', seoData.description);
  }
  
  // Update Open Graph title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', seoData.title);
  
  // Update Open Graph description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', seoData.description);
  
  // Update Open Graph image
  if (seoData.image) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', seoData.image);
    
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', seoData.imageAlt || seoData.title);
  }
  
  // Update Twitter title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', seoData.title);
  
  // Update Twitter description
  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (!twitterDescription) {
    twitterDescription = document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    document.head.appendChild(twitterDescription);
  }
  twitterDescription.setAttribute('content', seoData.description);
  
  // Update Twitter image
  if (seoData.image) {
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', seoData.image);
    
    let twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (!twitterImageAlt) {
      twitterImageAlt = document.createElement('meta');
      twitterImageAlt.setAttribute('name', 'twitter:image:alt');
      document.head.appendChild(twitterImageAlt);
    }
    twitterImageAlt.setAttribute('content', seoData.imageAlt || seoData.title);
  }
}
