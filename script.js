class HashMap {
  constructor() {
    this.memory = {};
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
    this.memory[key] = value;
  }
  get(key) {
    return this.memory[key];
  }
  has(key) {
    return this.memory.hasOwnProperty(key);
  }
  remove(key) {
    delete this.memory[key];
  }
  clear() {
    this.memory = {};
  }
}

const myHashMap = new HashMap();
myHashMap.set(`Uria`, `OldValue`);
myHashMap.set(`Uria`, `NewValue`);
myHashMap.set(`Irina`, 32);
console.log(myHashMap.get(`Uria`));
console.log(myHashMap.has(`Uria`));
console.log(myHashMap.has(`Agrajag`));
myHashMap.remove(`Irina`);
console.log(myHashMap.memory);
myHashMap.clear();
console.log(myHashMap);
