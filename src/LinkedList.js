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
  }
}
