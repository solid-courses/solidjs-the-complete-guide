import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Contact() {
  return (
    <main>
      <Title>Contact</Title>
      <h1>Contact Us</h1>
      <p>Get in touch through our contact form.</p>
      <p><A href="/contact/form">Go to Contact Form</A></p>
    </main>
  );
}
