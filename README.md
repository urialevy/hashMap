# Hash Map
A hashmap project for the ODIN project
This includes both the hash map and hash set projects for the ODIN Project. The hash map has the following methods with the respective arguments:

# Conceptual overview

Each hashmap has a `memory` array. This array is set to be a specific length when the hash map is created, and the memory is instantly filled with empty linked lists. Setting a key-value pair appends it to the linked list - either as head or tail node.

The hash set is similar, though it only stores keys with no values.

# Hash Map Functionality

* `set(key, value)` => hashes a key-value pair and inserts it into the hash map, including automatic memory upsizing based on the amount of empty buckets. Duplication is impossible, rather data is overwritten. Usually `O(1)`, sometime `O(N)` if we're unlucky.
* `get(key)` => retrieves the value of an object with a key; if this key does not exist in the hash map, this returns `undefined`.
* `remove(key)` => completely deletes the key-value pair with a particular key. Returns `true` when done and `false` when no key was found.
* `has(key)` => returns true/false dpeending on whether a key exists
* `clear()` => clears memory
* `completeLength()` => returns an integer that is the number of items in the hash map across all levels.
* `keys()` => returns an array of all keys
* `values()` => returns an array of all values
* `entries()` => returns an array of all key-value pairs in a nested array, e.g. `[["key1", "value1"], ["key2", "value2"]]`

# Hash set functionality

* `set(key)` => exactly like the hash map's `set` function, except that it only uses a key.
* `get(key)` => returns the key that's used as an argument for this method. If no such key exists, returns `undefined`.
* `remove(key)` => exactly the same like the hash map functionality
* `has(key)` => returns true/false dpeending on whether a key exists
* `clear()` => clears memory
* `completeLength()` => returns an integer that is the number of items in the hash map across all levels.
* `entries()` => returns an array of all keys, e.g. `["key1","key2"]`

# thoughts and reflections

This was, in all honesty, a super fun project to work on. I enjoyed the challenge of thinking this through and accounting for all the edge cases, while making sure that insertion and retrieval stays as close to `O(1)` as possible. Creating this certainly taught me a lot and I'm excited to learn more!
