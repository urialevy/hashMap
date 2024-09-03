import { HashNodeList } from "./HashNodeList.js";

export class HashSet {
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
      let newList = new HashNodeList();
      this.memory[i] = newList;
    }
  }
  checkLoad() {}
  set(key) {
    this.completeLength = this.completeLength + 1;
    this.checkLoad();
  }
}
