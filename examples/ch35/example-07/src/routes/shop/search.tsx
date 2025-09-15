import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Search() {
  return (
    <main>
      <Title>Search</Title>
      <h1>Search Products</h1>
      <p>Use this page to search for products in our store.</p>
      <input type="search" placeholder="Search by name or ID" />
      <p><em>Note: Search feature is not implemented.</em></p>
    </main>
  );
}
