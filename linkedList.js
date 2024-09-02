export class Node {
  constructor(key, value, nextNode) {
    this.key = key;
    this.value = value;
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
}
