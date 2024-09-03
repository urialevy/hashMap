import { HashMap } from "./hashMap.js";
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
test.set("moon", "silver");
// console.log(test.entries());
// console.log(test.memory);
// console.log(test.checkLength());

const testData = [
  { key: "key1", value: "value1" },
  { key: "key2", value: "value2" },
  { key: "key3", value: "value3" },
  { key: "key4", value: "value4" },
  { key: "key5", value: "value5" },
  { key: "key6", value: "value6" },
  { key: "key7", value: "value7" },
  { key: "key8", value: "value8" },
  { key: "key9", value: "value9" },
  { key: "key10", value: "value10" },
  { key: "key11", value: "value11" },
  { key: "key12", value: "value12" },
  { key: "key13", value: "value13" },
  { key: "key14", value: "value14" },
  { key: "key15", value: "value15" },
  { key: "key16", value: "value16" },
  { key: "key17", value: "value17" },
  { key: "key18", value: "value18" },
  { key: "key19", value: "value19" },
  { key: "key20", value: "value20" },
];

const test2 = new HashMap();
for (let i = 0; i < testData.length; i++) {
  test2.set(testData[i].key, testData[i].value);
}

console.log(test2.get("key-25")); // should return undefined
console.log(test2.entries());
