import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Home | Echoes</Title>

      <h1>Welcome to Echoes</h1>
      <p>
        Echoes is a quote management application built with SolidStart. It lets you
        collect, organize, and revisit your favorite quotations from authors,
        speakers, and other sources.
      </p>
      <p>
        This project demonstrates SolidStart in action — including routing,
        server-side rendering, form handling, validation, and secure session
        management.
      </p>

      <h2>What You Can Do</h2>
      <ul>
        <li>Save memorable quotes with their author.</li>
        <li>Browse your personal collection at any time.</li>
        <li>Edit or remove quotes as your collection grows.</li>
        <li>Organize by author to keep things tidy.</li>
      </ul>

      <h2>How to Get Started</h2>
      <ol>
        <li>Create an account or log in to access all features.</li>
        <li>Add authors you want to associate with your quotes.</li>
        <li>Start saving quotes you want to remember.</li>
        <li>Visit your dashboard to manage and edit your collection.</li>
        <li>
          Use the edit pages to update your collection — you can delete items
          individually or select multiple items to delete in bulk.
        </li>
      </ol>
    </main>
  );
}
