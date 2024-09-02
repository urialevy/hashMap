import { LinkedList, Node } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.memory = [];
    this.length = 0;
    this.memSize = 9;
    this.memory.length = this.memSize;
  }
  rePop() {
    for (let i = 0; i < this.memory.length; i++) {
      let ll = new LinkedList();
      this.memory[i] = ll;
    }
  }
  checkLoad() {
    if (this.memory[0] == null) {
      // all buckets contain a linked list - a null array necessarily means that there's not even a linked list there
      this.rePop();
    }
    if (this.length >= Math.ceil(this.memSize * this.loadFactor)) {
      let newMem = [];
      this.memSize = this.memSize * 2;
      newMem.length = this.memSize;
      // still need to hash newMem's entries before

      this.rePop();
      this.memory = newMem;
      return true;
    }
    return false;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.memSize;
    return hashCode;
  }
  set(key, value) {
    this.checkLoad();
    let hash = this.hash(key);
    if (this.memory[hash].head == null) {
      this.length = this.length + 1;
    }
    this.memory[hash].append(key, value);
    return;
  }
  get(key) {
    if (this.memory[this.hash(key)] == undefined) {
      return null;
    }
    return this.memory[this.hash(key)];
  }
  has(key) {
    return this.memory[this.hash(key) != undefined];
  }
  remove(key) {
    let index = this.hash(key);
    if (this.memory[index] == null) {
      return false;
    }
    this.memory.splice(this.hash(key), 1);
    this.memory.length = this.memSize;
    this.length = this.length - 1;
    return true;
  }
  clear() {
    this.memory = [];
    this.rePop();
    this.length = 0;
  }
  //TODO: refactor, should return the length of the entire hashmap
  length() {}
  //TODO: refactor, should reeturn all keys in an array
  keys() {
    let arr = [];
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i] != null) {
        arr.push(this.memory[i].key);
      }
    }
    return arr;
  }

  //TODO: refactor, should reeturn all values in an array
  values() {
    let arr = [];
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i] != null) {
        arr.push(this.memory[i].value);
      }
    }
    return arr;
  }
  //TODO: refactor, should reeturn all key-value pairs in an array
  entries() {
    let arr = [];
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i] != null) {
        arr.push(this.memory[i]);
      }
    }
    return arr;
  }
}
