import { HashMap } from "./hashMap.js";
const myHashMap = new HashMap();
myHashMap.set(`Uria`, 35);

myHashMap.set(`Irina`, 32);

myHashMap.set(`asdfgqwerty`, 32);

myHashMap.set(`Uria`, 35);

myHashMap.set(`Irina`, 32);

myHashMap.set(`Uria`, "something new");

myHashMap.set("Ayelet", "another thing");

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// console.log(test.get(`carrot`));
// console.log(test.length());
console.log(test.checkLength());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
