import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | VanillaPod Confections`;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }

    // Update Open Graph tags
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", `${title} | VanillaPod Confections`);
      }
    }

    if (description) {
      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", description);
      }
    }

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute("content", image);
      }
    }

    if (url) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", url);
      }
    }

    if (type) {
      const ogType = document.querySelector('meta[property="og:type"]');
      if (ogType) {
        ogType.setAttribute("content", type);
      }
    }

    // Update Twitter Card tags
    if (title) {
      const twitterTitle = document.querySelector(
        'meta[property="twitter:title"]'
      );
      if (twitterTitle) {
        twitterTitle.setAttribute(
          "content",
          `${title} | VanillaPod Confections`
        );
      }
    }

    if (description) {
      const twitterDescription = document.querySelector(
        'meta[property="twitter:description"]'
      );
      if (twitterDescription) {
        twitterDescription.setAttribute("content", description);
      }
    }

    if (image) {
      const twitterImage = document.querySelector(
        'meta[property="twitter:image"]'
      );
      if (twitterImage) {
        twitterImage.setAttribute("content", image);
      }
    }

    if (url) {
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute("content", url);
      }
    }

    // Update canonical URL
    if (url) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", url);
      }
    }

    // Add structured data if provided
    if (structuredData) {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript && existingScript.id === "page-structured-data") {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "page-structured-data";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;
