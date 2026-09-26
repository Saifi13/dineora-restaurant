import { useEffect, useRef } from "react";

const footerColumns = [
  {
    title: "Navigate",
    links: [
      ["Home", "/"],
      ["Menu", "/menu"],
      ["About", "/story"],
      ["Contact", "/#contact"],
    ],
  },
  {
    title: "Menu",
    links: [
      ["Burger", "/menu"],
      ["Pizza", "/menu"],
      ["Subway", "/menu"],
    ],
  },
  {
    title: "Follow Us",
    links: [
      ["Facebook", "#"],
      ["Instagram", "#"],
      ["LinkedIn", "#"],
      ["Twitter", "#"],
    ],
  },
];

function ContactIcon({ type }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.27.54 3.5.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.57 21 3 13.43 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.18 2.4.54 3.5a1 1 0 0 1-.25 1l-2.19 2.3Z" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Zm0-10.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8 7-5H5l7 5Zm0 2L4 9v8h16V9l-8 6Z" />
    </svg>
  );
}

export default function Footer() {
  const footerHeroRef = useRef(null);
  const leftDecorationRef = useRef(null);
  const rightDecorationRef = useRef(null);

  useEffect(() => {
    let frameId;

    const updatePositions = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const hero = footerHeroRef.current;
        if (!hero) return;

        const { top, height } = hero.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - top) / (window.innerHeight + height))
        );
        const offset = progress * 64;

        if (leftDecorationRef.current) {
          leftDecorationRef.current.style.translate = `0 ${-offset}px`;
        }
        if (rightDecorationRef.current) {
          rightDecorationRef.current.style.translate = `0 ${offset}px`;
        }
      });
    };

    updatePositions();
    window.addEventListener("scroll", updatePositions, { passive: true });
    window.addEventListener("resize", updatePositions);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updatePositions);
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-hero" ref={footerHeroRef}>
        <div
          className="footer-decoration footer-decoration-left"
          ref={leftDecorationRef}
          aria-hidden="true"
        >
          <img
            className="footer-food-image"
            src="/hero1.png"
            alt=""
          />

          <img
            className="footer-food-sticker"
            src="/heroSticker.png"
            alt=""
          />
        </div>

        <div className="footer-hero-content">

          <div className="footer-brand">
            <span className="footer-logo-wrap">
              <img src="/logo.png" alt="" />
            </span>

            <span>Udine</span>
          </div>

          <h2>Don&apos;t Wait – Order Now!</h2>

          <p>
            Fresh ingredients, mouth-watering recipes, and a passion for good
            food
            <br className="footer-desktop-break" />
            delivered to your door or ready for pick-up.
          </p>

          <a className="footer-order-button" href="/menu">
            Order Now <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="footer-decoration footer-decoration-right"
          ref={rightDecorationRef}
          aria-hidden="true"
        >
          <img
            className="footer-food-image"
            src="/hero2.png"
            alt=""
          />

          <svg
            className="footer-food-sticker"
            width="110"
            height="55"
            viewBox="0 0 110 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g clipPath="url(#footer-sticker-clip)">
              <path
                d="M108.004 24.0982C109.231 15.0834 109.8 7.81372 105.328 4.26183C103.521 1.9698 100.758 0.649649 97.848 0.687764C95.0347 0.480635 92.266 1.48266 90.2301 3.4448C86.4968 -0.294259 80.4542 -0.284107 76.7334 3.46747C76.2046 4.0007 75.74 4.59464 75.3494 5.23704C74.9669 4.7657 74.5385 4.33391 74.0706 3.94808C70.8749 -0.202896 64.9356 -0.964519 60.8049 2.24695C60.7181 2.31442 60.6325 2.38341 60.5481 2.45388C57.4754 0.629631 53.9261 -0.219684 50.3649 0.0171469C46.2052 0.111702 42.1871 1.55319 38.9082 4.12718C36.8352 2.34483 34.1699 1.41313 31.4438 1.51788C28.3503 1.58945 25.4774 3.14324 23.714 5.69845C21.802 3.4893 18.9786 2.29615 16.0701 2.46819C8.90491 2.82776 3.51019 10.3027 1.2675 22.9766C-1.14041 36.5852 -0.114026 45.3504 4.31673 49.0683C5.81627 51.2052 8.23901 52.4965 10.8406 52.5456C14.7887 52.6436 18.0383 50.1624 20.372 45.1661C21.8871 46.3368 23.7651 46.9318 25.6744 46.8459C27.3513 46.7819 28.9809 46.2697 30.3952 45.3622C30.9701 46.2096 31.6469 46.9823 32.4103 47.6629C34.2646 50.2466 37.2879 51.7195 40.4549 51.5821C41.4878 51.5277 42.5016 51.2804 43.4443 50.8527C43.7122 50.905 43.9828 50.9459 44.256 50.9755C49.7102 51.6876 55.255 50.9916 60.3673 48.9532C61.9139 49.9676 63.7163 50.5177 65.563 50.539C65.6228 50.5403 65.6827 50.5416 65.7438 50.5416C69.286 50.5403 71.5666 48.195 73.0911 45.1268C73.5957 45.8627 74.195 46.5282 74.8733 47.106C76.6799 49.4943 79.4865 50.9057 82.4717 50.9272C83.3581 50.9527 84.2412 50.8076 85.0734 50.4997C88.5323 54.99 94.9585 55.8124 99.4268 52.3366C103.585 49.1021 104.626 43.2269 101.835 38.7487C101.757 38.6232 101.678 38.5003 101.594 38.38C104.406 36.0113 106.966 31.7287 108.004 24.0982Z"
                fill="white"
              />

              <path
                d="M99.0731 6.92936C96.2716 6.78368 92.8401 8.00287 90.382 18.2012C90.6918 11.1492 89.3732 7.29335 85.3411 6.91007C81.1856 6.51494 78.3296 11.192 77.0004 22.0891C75.8135 21.8994 74.5289 21.7678 73.1814 21.6677C74.152 12.1662 73.1475 6.96996 68.4333 6.52197C65.6615 6.2584 63.4692 8.25631 61.9198 12.8409C61.8818 11.7003 61.5733 10.5852 61.0202 9.58852C58.44 4.67931 43.7133 4.57571 40.4049 13.2696C38.6641 9.91326 36.3018 7.63552 33.0939 7.76225C28.3195 7.95082 27.2727 13.5119 25.4116 17.6537C23.6417 13.9159 22.4411 8.47642 17.7685 8.71091C12.3677 8.982 8.8678 16.637 7.32457 25.36C5.65027 34.8239 4.97519 47.7292 10.9463 47.8656C17.8302 48.0229 19.5303 29.0103 19.5303 29.0103C19.5303 29.0103 19.4878 42.3828 25.5073 42.1672C32.3802 41.9209 31.766 28.8196 31.766 28.8196C31.766 28.8196 32.6275 47.3167 40.2029 46.9074C41.1872 46.8459 42.1113 46.41 42.7873 45.6883C43.3928 46.0304 44.061 46.2455 44.7516 46.3207C51.1127 47.0043 57.6404 45.8944 61.1618 43.1049C62.0269 44.8023 63.7677 45.8672 65.6655 45.8597C68.5987 45.9239 70.2265 40.7218 71.4812 33.6307C72.1485 33.6733 72.8457 33.695 73.6011 33.6761C74.5599 33.6523 75.4394 33.5845 76.2728 33.4897C76.3047 41.5118 77.9931 46.1475 82.5733 46.2477C85.9722 46.3222 87.6182 39.326 88.9615 30.5119C89.4627 35.9584 92.2511 36.4179 93.1511 36.4647C94.3668 36.5279 101.467 37.5631 103.385 23.4674C105.303 9.37173 103.776 7.17381 99.0731 6.92936ZM61.0405 16.0265C60.5158 18.4632 60.1358 20.9291 59.9026 23.4111C56.5448 21.7054 50.0803 22.8669 50.0803 22.8669C50.0803 22.8669 58.2959 20.6766 61.0405 16.0265ZM50.8458 32.6663C53.8387 32.451 56.7561 31.6224 59.4183 30.2314C59.3782 31.2998 59.357 32.3276 59.3641 33.2971C56.5719 32.6609 53.7007 32.4483 50.8458 32.6663Z"
                fill="#FF5C90"
                stroke="#FF5C90"
                strokeWidth="0.64482"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            <defs>
              <clipPath id="footer-sticker-clip">
                <rect width="110" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

      </div>

      <div className="footer-details">
        {footerColumns.map((column) => (
          <section className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="footer-column footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <span className="footer-contact-icon"><ContactIcon type="phone" /></span>
              <a href="tel:6027744735">602-774-4735</a>
            </li>
            <li>
              <span className="footer-contact-icon"><ContactIcon type="location" /></span>
              <span>1022 South 5st Street Suite 105<br />Phoenix, AZ 85044</span>
            </li>
            <li>
              <span className="footer-contact-icon"><ContactIcon type="email" /></span>
              <a href="mailto:hi@udine.co">hi@udine.co</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Saifi. Recreated from UnifiedUI.
        </p>
      </div>
    </footer>
  );
}