import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
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
