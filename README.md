# Doubly Linked List

**SOFT 144 | Bates Technical College**
**Bradley Burks**

---

## Description

A Doubly Linked List implementation in plain JavaScript. Each node holds a value and two references — one pointing forward (`next`) and one pointing backward (`prev`) — allowing the list to be traversed in either direction.

---

## How to Run

```bash
node doublyLinkedList.js
```

No dependencies. Node.js is all you need.

---

## Methods

| Method | Description |
|---|---|
| `addToFront(value)` | Adds a new node at the head of the list |
| `addToEnd(value)` | Adds a new node at the tail of the list |
| `removeFromFront()` | Removes and returns the value at the head |
| `removeFromEnd()` | Removes and returns the value at the tail |
| `print()` | Prints the full list and its current length |

---

## How `next` and `prev` References Change

### `addToFront(value)`

A new node is inserted before the current head.

```
Before:  head → [A] <-> [B] <-> [C] ← tail

1. newNode.next = head (A)     →  [NEW] → [A] <-> [B] <-> [C]
2. head.prev    = newNode      →  [NEW] <-> [A] <-> [B] <-> [C]
3. head         = newNode      →  head points to [NEW]

After:   head → [NEW] <-> [A] <-> [B] <-> [C] ← tail
```

---

### `addToEnd(value)`

A new node is inserted after the current tail.

```
Before:  head → [A] <-> [B] <-> [C] ← tail

1. tail.next    = newNode      →  [A] <-> [B] <-> [C] → [NEW]
2. newNode.prev = tail (C)     →  [A] <-> [B] <-> [C] <-> [NEW]
3. tail         = newNode      →  tail points to [NEW]

After:   head → [A] <-> [B] <-> [C] <-> [NEW] ← tail
```

---

### `removeFromFront()`

The head node is removed and the next node becomes the new head.

```
Before:  head → [A] <-> [B] <-> [C] ← tail

1. head         = A.next (B)   →  head points to [B]
2. head.prev    = null         →  [B]'s backward link is severed
3. A.next       = null         →  removed node is cleaned up

After:   head → [B] <-> [C] ← tail
Returns: A's value
```

---

### `removeFromEnd()`

The tail node is removed and the previous node becomes the new tail.

```
Before:  head → [A] <-> [B] <-> [C] ← tail

1. tail         = C.prev (B)   →  tail points to [B]
2. tail.next    = null         →  [B]'s forward link is severed
3. C.prev       = null         →  removed node is cleaned up

After:   head → [A] <-> [B] ← tail
Returns: C's value
```

---

## Edge Cases Handled

- **Empty list** — `removeFromFront()` and `removeFromEnd()` return `null` safely
- **Single node** — both `head` and `tail` are reset to `null` after removal

---

## Repository

[github.com/blburks/doubly-linked-list](https://github.com/blburks/doubly-linked-list)