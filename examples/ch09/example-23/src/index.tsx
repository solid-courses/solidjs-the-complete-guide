import { render } from 'solid-js/web';

function App() {
  function divRef(el: HTMLDivElement) {
    const rect = el.getBoundingClientRect()
    console.log(JSON.stringify(rect, null, 2));
  }

  return (
    <div style={`margin-top: 10rem`}>
      <div ref={divRef}>App!</div>
    </div>
  );
}

render(() => <App />, document.body);