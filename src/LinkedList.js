import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
 
  toArray() {
    var arr = [];
    let tail = this.head;
    while (tail !== null) {
      arr.push(tail.data);
      tail = tail.next;
    }

    return arr;
  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    let tail = this.head.next;
    let previousNode = this.head;

    while (tail.next !== null) {
      tail = tail.next;
      previousNode = previousNode.next;
    }

    previousNode.next = null;
    this.size--;

  }
}
