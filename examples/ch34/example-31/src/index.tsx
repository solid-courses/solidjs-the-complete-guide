import { Route, Router, useSearchParams } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import { render } from "solid-js/web";
import { productInventory } from "./productInventory";

type Category = 'electronics' | 'clothing' | 'all';

type Sort = 'price' | 'rating' | 'date' | 'default';

type Order = 'asc' | 'desc';

export type Item = {
  id: number,
  name: string,
  category: string;
  price: number,
  rating: number,
  date: string;
};

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = createMemo<Category>(() => {
    const category = searchParams.category;
    const value = Array.isArray(category) ? category.at(0) : category;
    return value || "all" as any;
  });

  const sort = createMemo<Sort>(() => {
    const sort = searchParams.sort;
    const value = Array.isArray(sort) ? sort.at(0) : sort;
    return value || "default" as any;
  });

  const order = createMemo<Order>(() => {
    const order = searchParams.order;
    const value = Array.isArray(order) ? order.at(0) : order
    return value || "asc" as any;
  });

  const products = createMemo(() => {
    const cat = category();
    const filtered = productInventory.filter(
      (product) => cat === "all" || product.category === cat
    );

    const sorted = filtered.sort((a, b) => {
      const value = sort();
      if (value === "default") return 0;
      if (order() === "asc") return a[value] > b[value] ? 1 : -1;
      return a[value] < b[value] ? 1 : -1;
    });

    return sorted;
  });

  const handleCategoryChange = (event: Event) => {
    const category = (event.target as HTMLSelectElement).value;
    setSearchParams({ category }, { replace: true, scroll: true });
  };

  const handleSortChange = (event: Event) => {
    const sort = (event.target as HTMLSelectElement).value;
    setSearchParams({ sort }, { replace: true, scroll: true });
  };

  const handleOrderChange = (event: Event) => {
    const order = (event.target as HTMLInputElement).value;
    setSearchParams({ order }, { replace: true, scroll: true });
  };

  return (
    <div>
      <h1>Product Listing</h1>

      <div>
        <label>Category:</label>
        <select value={category()} onInput={handleCategoryChange}>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="all">All</option>
        </select>
      </div>

      <div>
        <label>Sort By:</label>
        <select value={sort()} onInput={handleSortChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="date">Date</option>
          <option value="default">Default</option>
        </select>
      </div>

      <div>
        <fieldset>
          <legend>Order By:</legend>
          <label>
            <input
              type="radio"
              name="order"
              value="asc"
              checked={order() === "asc"}
              onInput={handleOrderChange}
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              name="order"
              value="desc"
              checked={order() === "desc"}
              onInput={handleOrderChange}
            />
            Descending
          </label>
        </fieldset>
      </div>

      <h2>Products</h2>

      <ul>
        <For each={products()}>
          {(product) => (
            <li>
              {product.name} - ${product.price} - {product.rating} stars
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/products?category=electronics&sort=price">Electronics</a>
        </li>
        <li>
          <a href="/products?category=clothing&sort=default">Clothing</a>
        </li>
        <li>
          <a href="/products?category=all&sort=default">All Products</a>
        </li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <Router preload={false}>
      <Route path="/" component={Home} />
      <Route path="/products" component={ProductListing} />
    </Router>
  );
}

render(() => <App />, document.body);