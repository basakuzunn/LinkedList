import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }

  reverse() {
    let reversedList = new LinkedList();

    let tail = this.head;
    while (tail != null) {
      reversedList.addFirst(tail.data);
      tail = tail.next;
    }

    return reversedList;
  }
}
