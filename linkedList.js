export class Node {
  constructor(value, key, nextNode) {
    this.value = value;
    this.key = key;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    let newNode = new Node(key, value, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.key == key) {
          currentNode.value = value;
          return;
        }
        if (currentNode.nextNode === null) {
          currentNode.nextNode = newNode;
          return;
        }
        currentNode = currentNode.nextNode;
      }
    }
  }

  size() {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      i = i + 1;
      currentNode = currentNode.nextNode;
    }
    return i;
  }

  contains(value) {
    if (this.head == null) {
      const err = new Error(`no nodes in list`);
      throw err;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.head == null) {
      const err = new Error(`no nodes in list`);
      throw err;
    }
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return i;
      }
      i = i + 1;
      currentNode = currentNode.nextNode;
    }
    return `"${value}" not found in list`;
  }
}
