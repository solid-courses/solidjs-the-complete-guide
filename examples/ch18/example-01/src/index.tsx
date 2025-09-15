import { createSignal, batch } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [userName, setUserName] = createSignal("");
  const [userEmail, setUserEmail] = createSignal("");

  function openUserProfile() {
    const name = "John Doe";
    const email = "johndoe@example.com";

    batch(() => {
      setUserName(name);
      setUserEmail(email);
      setIsModalOpen(true);
    });
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div style={{ padding: "2em", "font-family": "sans-serif" }}>
      <h2>User Directory</h2>
      <button onClick={openUserProfile}>View Profile</button>

      {isModalOpen() && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "1.5em",
            background: "#fff",
            border: "1px solid #ccc",
            "box-shadow": "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            "z-index": 1000,
          }}
        >
          <h3>User Profile</h3>
          <p><strong>Name:</strong> {userName()}</p>
          <p><strong>Email:</strong> {userEmail()}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

render(() => <App />, document.body);