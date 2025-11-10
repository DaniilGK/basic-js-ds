const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // создаём фиктивный (временный) узел перед началом списка
  const dummy = { value: null, next: l };

  // текущий узел (начинаем с dummy)
  let current = dummy;

  // пока есть следующий элемент
  while (current.next) {
    if (current.next.value === k) {
      // если значение совпадает — "пропускаем" этот узел
      current.next = current.next.next;
    } else {
      // иначе идём дальше
      current = current.next;
    }
  }

  // возвращаем "чистый" список, без dummy
  return dummy.next;
}

module.exports = {
  removeKFromList
};
