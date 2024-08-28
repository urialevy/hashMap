class HashMap {
  constructor() {
    this.memory = [];
    this.length = 0;
    this.memSize = 16;
    this.memory.length = this.memSize;
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
    this.memory[this.hash(key)] = { key, value };
    this.length = this.length + 1;
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
  }
  length() {
    return this.length;
  }
  keys() {
    let arr = [];
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i] != null) {
        arr.push(this.memory[i].key);
      }
    }
    return arr;
  }
  values() {
    let arr = [];
    for (let i = 0; i < this.memory.length; i++) {
      if (this.memory[i] != null) {
        arr.push(this.memory[i].value);
      }
    }
    return arr;
  }
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

const myHashMap = new HashMap();
myHashMap.set(`Uria`, 35);
myHashMap.set(`Irina`, 32);
myHashMap.set(`asdfgqwerty`, 32);
console.log(myHashMap.memory);
console.log(myHashMap.length);
console.log(myHashMap.remove(`Irina`));
console.log(myHashMap.remove(`Irina`));
console.log(myHashMap.memory);
console.log(myHashMap.length);
console.log(myHashMap.keys());
console.log(myHashMap.values());
console.log(myHashMap.entries());
