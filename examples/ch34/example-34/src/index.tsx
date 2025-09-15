import {
  A,
  Route,
  RouteSectionProps,
  Router,
  useBeforeLeave
} from "@solidjs/router";
import { Component, JSX, createSignal } from "solid-js";
import { render } from "solid-js/web";

type ChangeEvent = JSX.InputEventHandler<HTMLInputElement, InputEvent>;

function EditProfile() {
  const [formState, setFormState] = createSignal({
    name: "",
    email: "",
    isDirty: false,
  });

  const handleChange: ChangeEvent = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value, isDirty: true }));
  };

  useBeforeLeave((event) => {
    if (formState().isDirty && !event.defaultPrevented) {
      event.preventDefault();
      const msg = 'You have unsaved changes. Do you really want to leave?';
      if (window.confirm(msg)) {
        event.retry(true); // Force navigation without re-running handlers
      }
    }
  });

  return (
    <form>
      <h1>Edit Profile</h1>
      <div>
        <label for="name">Name:</label>
        <input
          name="name"
          value={formState().name}
          onInput={handleChange}
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          name="email"
          value={formState().email}
          onInput={handleChange}
        />
      </div>
    </form>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is a demo showing how to use <code>useBeforeLeave</code> to
        warn users before leaving a page with unsaved changes.
      </p>
      <ol>
        <li>Click the <A href="/edit">edit</A> link.</li>
        <li>Change your name or email in the form.</li>
        <li>Try navigating back to Home without saving.</li>
        <li>When prompted, choose to stay or leave.</li>
      </ol>
    </div>
  );
}

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <div>
      <nav>
        <a href="/">Home</a> | <a href="/edit">Edit</a>
      </nav>
      {props.children}
    </div>
  );
}


function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/edit" component={EditProfile} />
    </Router>
  );
}

render(() => <App />, document.body);