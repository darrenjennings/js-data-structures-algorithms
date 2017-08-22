class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  push(val) {
    var head = this.head,
      current = head,
      previous = head;
    if (!head) {
      this.head = { value: val, previous: null, next: null };
    } else {
      while (current && current.next) {
        previous = current;
        current = current.next;
      }
      current.next = { value: val, previous: current, next: null };
    }
  }

  printList() {
    let response = "";
    if (!this.head) {
      console.log(response);
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      response += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    console.log((response += currentNode.value));
  }

  reverse() {
    let currentNode = this.head;

    while (currentNode) {
      let tmp = currentNode.next;
      currentNode.next = currentNode.previous;
      currentNode.previous = tmp;
      if (!tmp) {
        this.head = currentNode;
      }
      currentNode = tmp;
    }
  }
}

module.exports = DoublyLinkedList;
