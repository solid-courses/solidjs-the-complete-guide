import { type Component } from "solid-js";

// Runs when the module is evaluated.
console.log('Module is loaded!');

const About: Component<{}> = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company and the team behind it.</p>
    </div>
  );
};

export default About;
