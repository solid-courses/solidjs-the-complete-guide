interface Signal<T> {
  value: T;
  observers: Set<Computation<any>>;
}

interface Computation<T extends any> {
  fn: (prev: T) => T,
  value: T,
}

let currentComputation: Computation<any> | null = null;

function createSignal<T>(value: T): [() => T, (val: T) => void] {
  const signal: Signal<T> = {
    value,
    observers: new Set(),
  };

  const read = () => {
    if (currentComputation) {
      // Add the current computation to the signal’s observers.
      signal.observers.add(currentComputation);
    }
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
  // Store the current computation in an external variable.
  currentComputation = computation;
  
  // Execute the computation function to get the next value.
  const nextValue = computation.fn(computation.value);

  // Update the stored value with the result.
  computation.value = nextValue;
}

const [count, setCount] = createSignal(0);

let isDone = false;
createComputation(() => {
  console.log("Running computation #1");
  if (!isDone) {
    console.log(`Count in #1 is ${count()}`);
  }
}, undefined);

createComputation(() => {
  console.log("Running computation #2 and count is", count());
}, undefined);

isDone = true;
console.log(`isDone!`);

setCount(1);
setCount(2);