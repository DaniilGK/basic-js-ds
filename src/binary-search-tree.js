const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  // вернуть корень (или null если дерево пустое)
  root() {
    return this.rootNode;
  }

  // добавить значение в дерево
  add(data) {
    const newNode = { data: data, left: null, right: null };

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data === current.data) {
        // если значение уже есть — не добавляем дубликат
        return;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else { // data > current.data
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // найти и вернуть узел с данным значением (или null)
  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  // вернуть true если значение есть в дереве
  has(data) {
    return !!this.find(data);
  }

  // удалить узел со значением data
  remove(data) {
    // вспомогательная рекурсивная функция
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // найден узел для удаления
        // 1) нет детей
        if (!node.left && !node.right) {
          return null;
        }
        // 2) только правый ребёнок
        if (!node.left) {
          return node.right;
        }
        // 3) только левый ребёнок
        if (!node.right) {
          return node.left;
        }
        // 4) два ребёнка: найти минимум в правом поддереве
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        // заменить данные текущего узла на данные minRight
        node.data = minRight.data;
        // удалить тот минимум в правом поддереве
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  // вернуть минимальное значение (или null)
  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  // вернуть максимальное значение (или null)
  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};