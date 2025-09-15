interface Signal<T> {
  value: T;
  observers: Set<Computation<any>>;
}

interface Computation<T extends any> {
  fn: (prev: T) => T,
  value: T,
}

function createSignal<T>(value: T): [() => T, (val: T) => void] {
  const signal: Signal<T> = {
    value,
    observers: new Set(),
  };

  const read = () => {
    return signal.value;
  };

  const write = (nextValue: T) => {
    if (signal.value !== nextValue) {
      signal.value = nextValue; // Update the signal's value.
      const observers = Array.from(signal.observers);
      signal.observers.clear(); // Clear the current subscribers.
      observers.forEach(c => runComputation(c)); // Notify all subscribers.
    }
  };

  return [read, write];
}

function createComputation<T>(fn: (prev: T) => T, value: T) {
  const computation: Computation<T> = { fn, value };
  runComputation(computation);
}

function runComputation(computation: Computation<any>) {
  computation.value = computation.fn(computation.value);
}

const [count, setCount] = createSignal(0);

createComputation((prev) => {
  console.log(`prev: ${prev}`);
  console.log(`count: ${count()}`);
  return count();
}, 99);