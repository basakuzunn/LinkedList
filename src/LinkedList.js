import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  contains(item) {
    let tail = this.head;

    while (tail !== null) {
      if (tail.data === item) {
        return true;
      } else {
        tail = tail.next;
      }
    }

    return false;
  }
}
