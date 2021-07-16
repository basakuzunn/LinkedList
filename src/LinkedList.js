import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
}
