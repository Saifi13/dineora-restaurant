import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const categoryThemes = {
  burger: {
    background: "#fff0e8",
    border: "#d58a55",
    button: "#ff6c0a",
    accent: "#281500",
  },
  pizza: {
    background: "#f1e8ff",
    border: "#8d5bc4",
    button: "#6415ad",
    accent: "#25104e",
  },
  subway: {
    background: "#e2fbfb",
    border: "#62baba",
    button: "#08acae",
    accent: "#00565b",
  },
};

const products = [
  {
    id: 1,
    name: "Cheesy Delight",
    category: "burger",
    price: "$ 8.99 USD",
    description: "Ground beef, grilled chicken, spicy turkey, or savory lamb.",
    image: "/burger1.png",
  },
  {
    id: 2,
    name: "Classic Burger",
    category: "burger",
    price: "$ 9.99 USD",
    description:
      "A juicy grilled burger with fresh toppings and melted cheese.",
    image: "/burger2.png",
  },
  {
    id: 3,
    name: "Double Stack",
    category: "burger",
    price: "$ 11.99 USD",
    description:
      "Double beef patties with crisp vegetables and special sauce.",
    image: "/burger3.png",
  },
  {
    id: 4,
    name: "Margherita Delight",
    category: "pizza",
    price: "$ 12.99 USD",
    description: "Mozzarella, tomato, fresh basil, and a burst of flavor.",
    image: "/pizza1.png",
  },
  {
    id: 5,
    name: "Pepperoni Feast",
    category: "pizza",
    price: "$ 13.99 USD",
    description: "Golden crust topped with pepperoni and melted mozzarella.",
    image: "/pizza2.png",
  },
  {
    id: 6,
    name: "Garden Pizza",
    category: "pizza",
    price: "$ 12.49 USD",
    description:
      "Fresh vegetables, herbs, and creamy mozzarella on every slice.",
    image: "/pizza3.png",
  },
  {
    id: 7,
    name: "Italian BMT",
    category: "subway",
    price: "$ 8.99 USD",
    description: "Sliced salami, roasted peppers, fresh mozzarella, and arugula.",
    image: "/subway1.png",
  },
  {
    id: 8,
    name: "Chicken Subway",
    category: "subway",
    price: "$ 9.49 USD",
    description:
      "Tender chicken, fresh vegetables, and delicious signature sauce.",
    image: "/subway2.png",
  },
  {
    id: 9,
    name: "Veggie Subway",
    category: "subway",
    price: "$ 7.99 USD",
    description:
      "Crisp vegetables, cheese, and flavorful dressing in fresh bread.",
    image: "/subway3.png",
  },
];

function ProductCard({ product }) {
  const theme = categoryThemes[product.category];

  return (
    <article
      className="product-card"
      style={{
        "--card-bg": theme.background,
        "--card-border": theme.border,
        "--card-button": theme.button,
        "--card-accent": theme.accent,
      }}
    >
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <strong>{product.price}</strong>
        </div>

        <p>{product.description}</p>
      </div>

      <div className="product-footer">
        <button className="add-cart-button" type="button">
          Add to cart <span aria-hidden="true">♟</span>
        </button>
      </div>
    </article>
  );
}

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visibleProducts =
    selectedCategory === "all"
      ? [
          products.find((product) => product.category === "burger"),
          products.find((product) => product.category === "pizza"),
          products.find((product) => product.category === "subway"),
        ].filter(Boolean)
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    ["all", "All Menu", "♟"],
    ["burger", "Burger", ""],
    ["pizza", "Pizza", ""],
    ["subway", "Subway", ""],
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-content">
        <img className="menu-image" src="/Menu.png" alt="" />

        <h2>Our Signature Dishes</h2>

        <p className="menu-description">
          From classic favorites to modern culinary creations, our menu is
          designed to tantalize your taste buds. Every dish is made with the
          freshest ingredients and an extra dash of love.
        </p>

        <nav className="menu-categories" aria-label="Menu categories">
          {categories.map(([value, label, icon]) => (
            <button
              key={value}
              type="button"
              className={selectedCategory === value ? "active" : ""}
              onClick={() => setSelectedCategory(value)}
            >
              {label} {icon && <span>{icon}</span>}
            </button>
          ))}
        </nav>

        <div className="product-grid" key={selectedCategory}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link className="view-all-button" to="/menu">
          View All <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export { products, categoryThemes, ProductCard };
export default Menu;
