import { type Component } from "solid-js";

// Log to show when the file is executed
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
