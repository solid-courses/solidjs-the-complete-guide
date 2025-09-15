import { Title } from "@solidjs/meta";

export default function Form() {
  return (
    <main>
      <Title>Contact Form</Title>
      <h1>Contact Form</h1>
      <p>Fill out the form below to send us a message.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label><br />
        <label>
          Email:
          <input type="email" name="email" />
        </label><br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
