import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
   getSize() {
    return this.size;
  }
  addLast(data) {
    let tempHead = this.head;
    if (tempHead === null) {
      tempHead = new Node(data);
    } else {
      while (tempHead !== null) {
        tempHead = tempHead.next;
      }

      tempHead.next = new Node(data);
    }
    this.size++;
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
 contains(item) {
    let tempHead = this.head;

    while (tempHead !== null) {
      if (tempHead.data === item) {
        return true;
      }
    }

    return false;
  }
  reverse() {
    let reversedList = new LinkedList();

    let tempHead = this.head;
    while (tempHead != null) {
      reversedList.addFirst(tempHead.data);
      tempHead = tempHead.next;
    }

    return reversedList;
  }
 indexOf(item){

        let count = 0;
        let tempHead = this.head;
        while(tempHead !== null){

            if(tempHead.data === item){
                return count;
            }else{
              tempHead = tempHead.next;
                count++;
            }
        }

        return -1;
    }
  toArray() {
    var arr = [];
    let tempHead = this.head;
    while (tempHead !== null) {
      arr.push(tempHead.data);
      tempHead = tempHead.next;
    }

    return arr;
  removeFirst() {
    if (this.head === null) {
    this.head = this.head.next;}
    this.size--;
  }

  removeLast() {
    let tempHead = this.head.next;
    let previousNode = this.head;

    while (tempHead.next !== null) {
      tempHead = tempHead.next;
      previousNode = previousNode.next;
    }

    previousNode.next = null;
    this.size--;

  }
}
