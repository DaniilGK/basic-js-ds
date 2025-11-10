const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // первый элемент (начало очереди)
    this.tail = null; // последний элемент (конец очереди)
  }

  // вернуть весь список (нужен для проверки тестами)
  getUnderlyingList() {
    return this.head;
  }

  // добавить элемент в конец очереди
  enqueue(value) {
    const newNode = { value: value, next: null };

    if (!this.head) {
      // если очередь пуста — новый узел становится и head, и tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // иначе добавляем в конец
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // удалить элемент из начала очереди и вернуть его значение
  dequeue() {
    if (!this.head) return null; // очередь пуста

    const value = this.head.value; // запоминаем значение
    this.head = this.head.next;    // двигаем "голову" вперёд

    if (!this.head) {
      // если после удаления очередь опустела, сбрасываем хвост
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
