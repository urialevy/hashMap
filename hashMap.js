import { LinkedList, Node } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.memory = [];
    this.length = 0;
    this.memSize = 16;
    this.memory.length = this.memSize;
    this.completeLength = 0;
    this.rePop();
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  index(hash) {
    return hash % this.memory.length;
  }

  rePop() {
    for (let i = 0; i < this.memory.length; i++) {
      let newList = new LinkedList();
      this.memory[i] = newList;
    }
  }
  duplicateMemory() {
    let newMem = [];
    let i = 0;
    while (this.memory[i]) {
      newMem.push(this.memory[i].retrieve());
      i = i + 1;
    }
    newMem = newMem.flat();
    return newMem;
  }
  extendMemory(mem) {
    this.memSize = this.memSize * 2;
    this.length = 0;
    this.memory = [];
    this.memory.length = this.memSize;
    this.completeLength = 0;
    this.rePop();

    for (let i = 0; i < mem.length; i++) {
      if (mem[i]) {
        this.set(mem[i].key, mem[i].value);
      }
    }
  }

  checkLoad() {
    if (this.memory[0] == undefined) {
      // all buckets contain a linked list - a null item in the array necessarily means that there's not even a linked list there
      this.rePop();
    }
    if (this.length >= Math.ceil(this.memSize * this.loadFactor)) {
      this.extendMemory(this.duplicateMemory());
    }
  }

  set(key, value) {
    this.completeLength = this.completeLength + 1;
    this.checkLoad();
    let index = this.index(this.hash(key));
    if (this.memory[index].head == null) {
      this.length = this.length + 1;
    }
    this.memory[index].append(key, value);
  }
  get(key) {
    const index = this.index(this.hash(key));
    const targetList = this.memory[index];
    if (targetList.head && targetList.head.key == key) {
      return targetList.head.value;
    }

    return targetList.findWithKey(key);
  }

  has(key) {
    const index = this.index(this.hash(key));

    if (this.memory[index].head && this.memory[index].head.key) {
      return true;
    }
    return this.memory[index].exists(key);
  }

  remove(key) {
    const index = this.index(this.hash(key));
    if (this.memory[index].head == null) {
      return false;
    }

    if (this.memory[index].find(key)) {
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
