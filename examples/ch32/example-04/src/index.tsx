import h from 'solid-js/h';
import { render } from 'solid-js/web';

function App(): any {
  return h('div', { id: 'hero' }, 'Hello World');
}

render(App, document.body);