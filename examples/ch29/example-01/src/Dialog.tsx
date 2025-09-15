import { type Component } from 'solid-js';

const Dialog: Component<{message: string}> = (props) => {
 return (
  <div>Message: {props.message}</div>
 );
};

export default Dialog;
