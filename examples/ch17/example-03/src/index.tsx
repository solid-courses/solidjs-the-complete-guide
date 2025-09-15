import { type Component, onMount } from "solid-js";
import { render } from "solid-js/web";

const Tooltip: Component<{ children: string; tip: string }> = (props) => {
  let tooltipEl!: HTMLDivElement;
  let wrapperEl!: HTMLSpanElement;

  onMount(() => {
    const tooltipBox = tooltipEl.getBoundingClientRect();
    const wrapperBox = wrapperEl.getBoundingClientRect();

    Object.assign(tooltipEl.style, {
      top: `-${tooltipBox.height + 8}px`,
      left: `${wrapperBox.width / 2}px`,
      transform: `translateX(-50%)`,
    });
  });

  const show = () => {
    tooltipEl.style.visibility = "visible";
    tooltipEl.style.opacity = "1";
  };

  const hide = () => {
    tooltipEl.style.visibility = "hidden";
    tooltipEl.style.opacity = "0";
  };

  return (
    <span
      ref={wrapperEl}
      onMouseEnter={show}
      onMouseLeave={hide}
      style={{
        color: 'green',
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        ref={tooltipEl}
        style={{
          position: "absolute",
          visibility: "hidden",
          opacity: "0",
          transition: "opacity 0.2s ease-in-out",
          background: "#222",
          color: "#fff",
          padding: "0.35em 0.5em",
          "font-size": "0.85em",
          "border-radius": "4px",
          "white-space": "nowrap",
          "pointer-events": "none",
          "z-index": "10",
        }}
      >
        {props.tip}
      </div>
      {props.children}
    </span>
  );
};

const App = () => {
  return (
    <div style={{ "margin-top": "3em", "text-align": "center" }}>
      Here is a <Tooltip tip="I'm a pure DOM tooltip">text</Tooltip> with a tip.
    </div>
  );
};

render(() => <App />, document.body);
