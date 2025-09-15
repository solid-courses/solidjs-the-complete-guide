import { render } from "solid-js/web";
import { UserProvider } from "./UserProvider";
import { UserProfile } from "./UserProfile";

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

render(() => <App />, document.body);
