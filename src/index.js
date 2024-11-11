import { Foo } from "./foo";
import { Bar } from "./bar";

const foo = new Foo();
const bar = new Bar();

class Counter {
  constructor() {
    this.count = 0;
  }

  inc() {
    this.count += 1;
  }

  dec() {
    this.count -= 1;
  }
}

const counter = new Counter();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.dec();
console.log(counter.count);

foo.foobar();
bar.bar();
