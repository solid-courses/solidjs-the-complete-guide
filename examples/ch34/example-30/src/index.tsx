import { Route, Router, useLocation } from "@solidjs/router";
import { render } from "solid-js/web";

function ProductListing() {
  const location = useLocation();

  const getFilters = () => {
    return {
      category: location.query.category || "all",
      sort: location.query.sort || "default",
    };
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <p>Category: {getFilters().category}</p>
      <p>Sorting by: {getFilters().sort}</p>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/products?category=electronics&sort=price">Electronics</a>
        </li>
        <li>
          <a href="/products?category=clothing&sort=popularity">Clothing</a>
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