import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addLast(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      while (this.head !== null) {
        this.head = this.head.next;
      }

      this.head.next = new Node(data);
    }
    this.size++;
  }
}
