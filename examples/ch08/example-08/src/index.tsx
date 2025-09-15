import { render } from "solid-js/web";

const App = () => {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Username" />
        <input value={10} type="number" min={0} max={10} />
      </div>

      <div style="color: orange;">Hello World</div>;

      <div style={{ color: 'blue', "background-color": 'white' }}>Hello World</div>

      <div innerHTML="Some Text" />;

      <h1 tabIndex={0} data-index-number={12}>Hello World</h1>
      <h1 tabindex={0}>Hello World</h1>

      <div>
        <button aria-label="Exit" onClick={handleClick} />
        <button aria-label="Exit" onclick={handleClick} />
      </div>

      <div>
        <input disabled />
        <input disabled={true} />
      </div>

      <div>{/* comments goes here */}</div>
    </>
  );
};

render(App, document.body);
