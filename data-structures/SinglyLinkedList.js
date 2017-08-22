class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    if (!this.head) {
      this.head = { next: null, value: value };
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = { next: null, value: value };
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
    let currentElement = this.head;
    let reversedList = new SinglyLinkedList();
    let nodes = [];
    while (currentElement) {
      nodes.push(currentElement);
      currentElement = currentElement.next;
    }
    //console.log(nodes);
    reversedList.head = nodes.pop();
    currentElement = reversedList.head;

    let node = nodes.pop();
    while (node) {
      node.next = null;
      currentElement.next = node;

      currentElement = currentElement.next;
      node = nodes.pop();
    }
    //console.log(reversedList);
    return reversedList;
  }
}
module.exports = SinglyLinkedList;
