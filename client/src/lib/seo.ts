// SEO utility for dynamic page metadata
export interface PageSEO {
  title: string;
  description: string;
}

export const pageSEOData: Record<string, PageSEO> = {
  home: {
    title: "Albor — Launch your stablecoin in 90 days.",
    description: "Full-stack stablecoin infrastrcutre for distribution, liquidity and payments on any chain."
  },
  "launch-stablecoin": {
    title: "Launch Your Stablecoin in 90 Days — Albor",
    description: "Activate your network with Albor's complete operational stack for stablecoin distribution, payments, and AI-powered security & compliance."
  },
  "offer-defi-products": {
    title: "Launch DeFi Products in 90 Days — Albor", 
    description: "Securely expand your digital asset offerings and access multi-chain liquidity, while maintaining full regulatory compliance and risk controls."
  },
  "secure-defi-ops": {
    title: "Secure DeFi Operations in 90 Days — Albor",
    description: "Enable your trading desk to securely execute trading opportunities on any chain, with AI-powered risk management and compliance."
  }
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
}