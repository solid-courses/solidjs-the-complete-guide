import { Chart } from 'chart.js/auto';
import { createSignal, Show, type Component } from 'solid-js';
import { render } from 'solid-js/web';

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const Canvas: Component = () => {
  const initChart = (el: HTMLCanvasElement) => {
    new Chart(el, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
          }
        ]
      }
    });
  };

  return <canvas ref={initChart} />;
};

function App() {
  const [show, setShow] = createSignal(false);
  
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show() ? 'Hide Chart' : 'Show Chart'}
      </button>
      <Show when={show()}><Canvas /></Show>
    </div>
  );
}

render(() => <App />, document.body);
