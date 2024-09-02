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
  retrieve() {
    let res = [];
    if (this.head == null) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      res.push(currentNode);
      currentNode = currentNode.nextNode;
    }
    for (let i = 0; i < res.length; i++) {
      res[i].nextNode = null;
    }
    return res;
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
  removeAt(index) {
    if (this.head == null) {
      const err = new Error(`Cannot remove from empty list`);
      throw err;
    }
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    let newNextNode;
    let count = 0;
    while (currentNode) {
      if (count == index) {
        if (currentNode.nextNode == null) {
          console.log(`final node`);
          previousNode.nextNode = null;
          currentNode = null;
          return;
        }
        previousNode.nextNode = newNextNode;
        currentNode = null;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      newNextNode = currentNode.nextNode;
      count = count + 1;
    }
    const err = new Error(`index ${index} exceeds list length`);
    throw err;
  }
}
