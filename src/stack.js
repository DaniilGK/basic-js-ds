const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    // внутреннее хранилище для данных
    this.items = [];
  }

  // добавить элемент в стек
  push(value) {
    this.items.push(value);
  }

  // удалить верхний элемент и вернуть его
  pop() {
    return this.items.pop();
  }

  // просто посмотреть верхний элемент
  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack,
};
