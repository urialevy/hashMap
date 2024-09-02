import { LinkedList, Node } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.memory = [];
    this.length = 0;
    this.memSize = 8;
    this.memory.length = this.memSize;
  }
  rePop() {
    for (let i = 0; i < this.memory.length; i++) {
      let newList = new LinkedList();
      this.memory[i] = newList;
    }
  }
  checkLoad() {
    if (this.memory[0] == undefined) {
      // all buckets contain a linked list - a null array necessarily means that there's not even a linked list there
      this.rePop();
    }
    if (this.length >= Math.ceil(this.memSize * this.loadFactor)) {
      let newMem = [];
      let i = 0;
      while (this.memory[i]) {
        newMem.push(this.memory[i].retrieve());
        i = i + 1;
      }
      newMem = newMem.flat();
      this.memSize = this.memSize * 2;
      this.length = 0;
      this.memory = [];
      this.memory.length = this.memSize;
      this.rePop();
      for (let i = 0; i < newMem.length; i++) {
        if (newMem[i]) {
          this.set(newMem[i].key, newMem[i].value);
        }
      }

      return;
    }
    return;
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
  set(key, value) {
    let hash = this.hash(key);
    this.checkLoad();
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
