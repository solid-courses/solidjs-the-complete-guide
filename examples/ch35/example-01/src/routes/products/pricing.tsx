import { Title } from "@solidjs/meta";

export default function Pricing() {
  return (
    <main>
      <Title>Pricing</Title>
      <h1>Product Pricing</h1>
      <table class="pricing">
        <thead>
          <tr>
            <th>Product</th>
            <th>Base Price</th>
            <th>Discount</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product A</td>
            <td>$25.00</td>
            <td>10%</td>
            <td>$22.50</td>
          </tr>
          <tr>
            <td>Product B</td>
            <td>$40.00</td>
            <td>15%</td>
            <td>$34.00</td>
          </tr>
          <tr>
            <td>Product C</td>
            <td>$60.00</td>
            <td>20%</td>
            <td>$48.00</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
