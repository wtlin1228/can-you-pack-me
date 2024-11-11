import { Bar } from "./bar";

export class Foo {
  constructor() {
    this.bar = new Bar();
  }

  foo() {
    console.log("foo");
  }

  foobar() {
    this.foo();
    this.bar.bar();
  }
}
