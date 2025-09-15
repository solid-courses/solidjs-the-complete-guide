import { createEffect, createSignal, from, observable } from 'solid-js';

type Subscriber = (val: any) => any;

class Observable {
  subscribers: Array<Subscriber> = [];

  subscribe(cb: Subscriber) {
    this.subscribers.push(cb);

    return {
      unsubscribe: () => {
        this.unsubscribe(cb);
      }
    };
  }

  unsubscribe(cb: Subscriber) {
    this.subscribers = this.subscribers.filter(item => item !== cb);
  }

  next(val: any) {
    this.subscribers.forEach(subscriber => subscriber(val));
  }
}

let o = new Observable();

const data = from(o);

createEffect(() => {
  console.log(data());
});

let x = 0;
setInterval(() => o.next(x++), 1000);