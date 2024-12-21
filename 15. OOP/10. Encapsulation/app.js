// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter() {
  let _count = 0; // private variable

  // Public method that can access and modify the private variable

  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = function () {
    return _count;
  };
}

const counter = new Counter();
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
