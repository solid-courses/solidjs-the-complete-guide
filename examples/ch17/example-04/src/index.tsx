import { type Component, onCleanup, onMount } from "solid-js";
import { render } from "solid-js/web";

const Tooltip: Component<{ children: string; tip: string }> = (props) => {
  let wrapperEl!: HTMLSpanElement;

  const tooltipEl: HTMLDivElement = document.createElement("div");

  Object.assign(tooltipEl.style, {
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
    "z-index": "1000",
    "will-change": "top, left, opacity",
  });

  onMount(() => {
    tooltipEl.textContent = props.tip;

    document.body.appendChild(tooltipEl);

    const { top, left, width } = wrapperEl.getBoundingClientRect();

    Object.assign(tooltipEl.style, {
      top: `${top + window.scrollY - tooltipEl.offsetHeight - 8}px`,
      left: `${left + window.scrollX + width / 2}px`,
      transform: "translateX(-50%)",
    });
  });

  onCleanup(() => {
    document.body.removeChild(tooltipEl);
  });

  const show = () => {
    tooltipEl.style.visibility = "visible";
    tooltipEl.style.opacity = "1";
  };

  const hide = () => {
    tooltipEl.style.opacity = "0";
    tooltipEl.style.visibility = "hidden";
  };

  return (
    <span
      ref={wrapperEl}
      onMouseEnter={show}
      onMouseLeave={hide}
      style={{
        color: "green",
        position: "relative",
        display: "inline-block",
      }}
    >
      {props.children}
    </span>
  );
};

const App = () => {
  return (
    <div style={{ "margin-top": "3em", "text-align": "center" }}>
      Hover over <Tooltip tip="I'm a pure DOM tooltip">this</Tooltip> to see it.
    </div>
  );
};

render(() => <App />, document.body);