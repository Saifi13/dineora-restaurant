import { useEffect } from "react";

const revealSelector = [
  "h1",
  "h2",
  "h3",
  ".hero-content p",
  ".menu-description",
  ".product-card",
  ".dine-intro",
  ".dine-feature-content",
  ".fresh-content",
  ".reviews-header",
  ".review-card",
  ".feast-header",
  ".footer-hero-content",
  ".footer-column",
  ".footer-bottom",
].join(",");

export default function ScrollTextReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = (root) => {
      if (root.matches?.(revealSelector)) {
        root.classList.add("scroll-reveal");
        observer.observe(root);
      }

      root.querySelectorAll?.(revealSelector).forEach((element) => {
        element.classList.add("scroll-reveal");
        observer.observe(element);
      });
    };

    observeElements(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeElements(node);
        });
      });
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}