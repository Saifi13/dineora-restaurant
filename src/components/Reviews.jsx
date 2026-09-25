import { useEffect, useState } from "react";

const reviews = [
  {
    id: "max-hardy",
    rating: 4,
    title: "Top-Notch Service",
    text: "The staff made us feel so welcome. Great vibes and even better food!",
    name: "Max Hardy",
    status: "Premium Customer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    tone: "peach",
  },
  {
    id: "larry-alexander",
    rating: 4,
    title: "Unforgettable Flavors",
    text: "Every bite was bursting with flavor. Easily one of the best meals I’ve had in ages!",
    name: "Larry Alexander",
    status: "Gold Customer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    tone: "lavender",
  },
  {
    id: "daniel-cormir",
    rating: 4,
    title: "Simply Delicious",
    text: "The flavors were rich and comforting. You can taste the love in every dish.",
    name: "Daniel Cormir",
    status: "Silver Customer",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    tone: "butter",
  },
  {
    id: "amanda",
    rating: 4,
    title: "Our Go-To Spot",
    text: "We come here almost every week. Consistently amazing food and service.",
    name: "Amanda",
    status: "Gold Customer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    tone: "rose",
  },
];

function Stars({ rating, max = 5 }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "review-star is-filled" : "review-star"}
          aria-hidden="true"
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className={`review-card review-card--${review.tone}`}>
      <Stars rating={review.rating} />
      <h3>{review.title}</h3>
      <p>{review.text}</p>
      <footer className="review-customer">
        <img src={review.avatar} alt={`Portrait of ${review.name}`} />
        <div>
          <strong>{review.name}</strong>
          <span>{review.status}</span>
        </div>
      </footer>
    </article>
  );
}

function ReviewGroup({ ariaHidden = false }) {
  return (
    <div className="reviews-group" aria-hidden={ariaHidden || undefined}>
      {reviews.map((review) => (
        <ReviewCard key={`${ariaHidden ? "clone" : "review"}-${review.id}`} review={review} />
      ))}
    </div>
  );
}

function ReviewsHeart() {
  const [src, setSrc] = useState("/heart1.png");

  useEffect(() => {
    let cancelled = false;

    fetch("/heart1.png")
      .then((response) => response.text())
      .then((markup) => {
        if (!cancelled && markup.trim().startsWith("<svg")) {
          setSrc(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return <img className="reviews-heart" src={src} alt="" />;
}

function Reviews() {
  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="reviews-header">
        <ReviewsHeart />
        <h2 id="reviews-heading">They Love’s Us</h2>
        <p>
          From classic favorites to modern culinary creations, our menu is
          designed to tantalize your taste buds. Every dish is made with the
          freshest ingredients and an extra dash of love.
        </p>
      </div>

      <div className="reviews-viewport">
        <div className="reviews-track">
          <ReviewGroup />
          <ReviewGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
