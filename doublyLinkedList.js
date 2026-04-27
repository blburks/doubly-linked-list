// ============================================================
// SOFT 144 - Doubly Linked List
// Bradley Burks | Bates Technical College
// ============================================================
 
// --- 1. Node Structure ---
// Each node holds a value, a reference to the next node,
// and a reference to the previous node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // points toward the tail
    this.prev = null; // points toward the head
  }
}
 
// --- 2. DoublyLinkedList Class ---
// Tracks the head (front), tail (end), and length of the list.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
 
  // --- 3. addToFront (prepend) ---
  // New node becomes the new head.
  // next and prev changes:
  //   newNode.next  → old head
  //   oldHead.prev  → newNode
  //   this.head     → newNode
  addToFront(value) {
    const newNode = new Node(value);
 
    if (this.length === 0) {
      // Empty list: head and tail both point to the only node
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // new node points forward to old head
      this.head.prev = newNode; // old head points backward to new node
      this.head = newNode;      // list head is updated
    }
 
    this.length++;
    return t
  }
 
  // --- 4. addToEnd (append) ---
  // New node becomes the new tail.
  // next and prev changes:
  //   oldTail.next  → newNode
  //   newNode.prev  → oldTail
  //   this.tail     → newNode
  addToEnd(value) {
    const newNode = new Node(value);
 
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // old tail points forward to new node
      newNode.prev = this.tail; // new node points backward to old tail
      this.tail = newNode;      // list tail is updated
    }
 
    this.length++;
    return this;
  }
 
  // --- 5. removeFromFront ---
  // Removes and returns the value at the head.
  // next and prev changes:
  //   newHead.prev  → null  (severs backward link)
  //   this.head     → oldHead.next
  removeFromFront() {
    if (this.length === 0) return null;
 
    const removed = this.head;
 
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;   // advance head to next node
      this.head.prev = null;      // new head has no predecessor
      removed.next = null;        // clean up removed node's reference
    }
 
    this.length--;
    return removed.value;
  }
 
  // --- 6. removeFromEnd ---
  // Removes and returns the value at the tail.
  // next and prev changes:
  //   newTail.next  → null  (severs forward link)
  //   this.tail     → oldTail.prev
  removeFromEnd() {
    if (this.length === 0) return null;
 
    const removed = this.tail;
 
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;   // move tail back to previous node
      this.tail.next = null;      // new tail has no successor
      removed.prev = null;        // clean up removed node's reference
    }
 
    this.length--;
    return removed.value;
  }
 
  // --- Helper: print the list front-to-back ---
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(`List (${this.length}): [${values.join(" <-> ")}]`);
  }
}
 
// ============================================================
// --- 7. Tests ---
// ============================================================
 
const list = new DoublyLinkedList();
 
console.log("=== Adding to end ===");
list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);
list.print(); // [10 <-> 20 <-> 30]
 
console.log("\n=== Adding to front ===");
list.addToFront(5);
list.addToFront(1);
list.print(); // [1 <-> 5 <-> 10 <-> 20 <-> 30]
 
console.log("\n=== Removing from front ===");
console.log("Removed:", list.removeFromFront()); // 1
list.print(); // [5 <-> 10 <-> 20 <-> 30]
 
console.log("\n=== Removing from end ===");
console.log("Removed:", list.removeFromEnd()); // 30
list.print(); // [5 <-> 10 <-> 20]
 
console.log("\n=== Removing all nodes ===");
console.log("Removed:", list.removeFromFront()); // 5
console.log("Removed:", list.removeFromEnd());   // 20
console.log("Removed:", list.removeFromFront()); // 10
list.print(); // List (0): []
 
console.log("\n=== Removing from empty list ===");
console.log("Removed:", list.removeFromFront()); // null
console.log("Removed:", list.removeFromEnd());   // null
 