import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  indexOf(item) {
    let count = 0;
    let tail = this.head;
    while (tail !== null) {
      if (tail.data === item) {
        return count;
      } else {
        tail = tail.next;
        count++;
      }
    }

    return -1;
  }
}
