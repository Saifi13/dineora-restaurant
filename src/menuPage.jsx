import { useState } from "react";
import Feast from "./components/feast";
import Footer from "./components/footer";
import { products, ProductCard } from "./menu";
import "./index.css";

const categories = [
  ["all", "All Menu", "♟"],
  ["burger", "Burger", ""],
  ["pizza", "Pizza", ""],
  ["subway", "Subway", ""],
];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visibleProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="menu-page">
        <section className="menu-section menu-page-section" aria-labelledby="menu-page-heading">
          <div className="menu-content">
            <img className="menu-page-badge" src="/Menu.png" alt="" />

            <h1 id="menu-page-heading">
              Fresh, plant-forward, earth
              <br />
              friendly food.
            </h1>

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
          </div>
        </section>

        <Feast />
        <Footer />
    </main>
  );
}

export default MenuPage;
