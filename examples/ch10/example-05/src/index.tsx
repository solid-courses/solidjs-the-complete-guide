import { type Component, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

type JSXButton = Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: JSXButton = (props) => {
  return <button {...props} />;
};

const PrimaryButton: JSXButton = (props) => {
  return <Button {...props}
    style={{ color: '#fff', 'background-color': '#004eff' }}
  />
}

const App: Component = () => {
  const handleSave = () => {
    alert('Settings saved!');
  };

  const handleFocus = () => {
    console.log('Button received focus!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Account Settings</h1>
      <p>Click the button below to save your settings.</p>

      <PrimaryButton
        onClick={handleSave}
        onFocus={handleFocus}
      >
        Save Changes
      </PrimaryButton>
    </div>
  );
};

render(() => <App />, document.body);
