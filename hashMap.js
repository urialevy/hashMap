import { LinkedList, Node } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.memory = [];
    this.length = 0;
    this.memSize = 16;
    this.memory.length = this.memSize;
    this.completeLength = 0;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.memory.length;
    return hashCode;
  }
  rePop() {
    for (let i = 0; i < this.memory.length; i++) {
      let newList = new LinkedList();
      this.memory[i] = newList;
    }
  }
  checkLoad() {
    if (this.memory[0] == undefined) {
      // all buckets contain a linked list - a null item in the array necessarily means that there's not even a linked list there
      this.rePop();
    }
    if (this.length >= Math.ceil(this.memSize * this.loadFactor)) {
      let newMem = [];
      let i = 0;
      while (this.memory[i]) {
        newMem.push(this.memory[i].retrieve());
        i = i + 1;
      }
      console.log(newMem);
      newMem = newMem.flat();

      this.memSize = this.memSize * 2;
      this.length = 0;
      this.memory = [];
      this.memory.length = this.memSize;
      this.rePop();

      for (let i = 0; i < newMem.length; i++) {
        if (newMem[i]) {
          this.set(newMem[i].key, newMem[i].value);
          this.completeLength = this.completeLength - 1;
        }
      }
    }
  }

  set(key, value) {
    this.completeLength = this.completeLength + 1;
    this.checkLoad();
    let hash = this.hash(key);
    if (this.memory[hash].head == null) {
      this.length = this.length + 1;
    }
    this.memory[hash].append(key, value);
    return;
  }
  get(key) {
    const hash = this.hash(key);

    const targetList = this.memory[hash];
    if ((targetList.head.key = key)) {
      return targetList.head.value;
    }
    return targetList.findWithKey(key);
  }

  has(key) {
    const hash = this.hash(key);

    if (this.memory[hash].head && this.memory[hash].head.key) {
      return true;
    }
    return this.memory[hash].exists(key);
  }

  remove(key) {
    let hash = this.hash(key);
    if (this.memory[hash].head == null) {
      return false;
    }

    if (this.memory[hash].find(key)) {
      this.memory[removeAt].removeAt(find(key));
      this.length = this.length - 1;
      this.completeLength = this.completeLength - 1;
      return true;
    }

    return false;
  }
  clear() {
    this.memory = [];
    this.rePop();
    this.length = 0;
    this.completeLength = 0;
  }
  checkLength() {
    return this.completeLength;
  }
  keys() {
    let arr = [];
    let keyArr = [];
    let i = 0;
    while (this.memory[i]) {
      arr.push(this.memory[i].retrieve());
      i = i + 1;
    }
    arr = arr.flat();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        keyArr.push(arr[i].key);
      }
    }

    return keyArr;
  }

  values() {
    let arr = [];
    let valuesArr = [];
    let i = 0;
    while (this.memory[i]) {
      arr.push(this.memory[i].retrieve());
      i = i + 1;
    }
    arr = arr.flat();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        valuesArr.push(arr[i].value);
      }
    }
    return valuesArr;
  }

  entries() {
    let arr = [];
    let newArr = [];
    let i = 0;
    while (this.memory[i]) {
      arr.push(this.memory[i].retrieve());
      i = i + 1;
    }
    arr = arr.flat();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        newArr.push([arr[i].key, arr[i].value]);
      }
    }
    return newArr;
  }
}
