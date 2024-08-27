class HashMap {
  constructor() {
    this.memory = [];
    this.memSize = 8;
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

    return;
  }
  get(key) {
    return this.memory[this.hash(key)];
  }
  has(key) {
    return this.memory[this.hash(key) != undefined];
  }
  remove(key) {
    this.memory.splice(this.hash(key), 1);
    this.memory.length = this.memSize;
  }
  clear() {
    this.memory = [];
  }
}

const myHashMap = new HashMap();
myHashMap.set(`Uria`, 35);
myHashMap.set(`Irina`, 32);
myHashMap.set(`asdfgqwerty`, 32);
console.log(myHashMap.memory);
myHashMap.remove(`Irina`);
console.log(myHashMap.memory);
