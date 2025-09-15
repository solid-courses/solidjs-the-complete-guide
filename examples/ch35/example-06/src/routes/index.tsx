import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>This app demonstrates logical route grouping with folders like <code>(admin)</code> and <code>(shop)</code>.</p>
      <ul>
        <li><A href="/dashboard">Admin Dashboard</A></li>
        <li><A href="/users">User Management</A></li>
        <li><A href="/products">Product Listing</A></li>
        <li><A href="/cart">Shopping Cart</A></li>
        <li><A href="/about">About</A></li>
      </ul>
    </main>
  );
}