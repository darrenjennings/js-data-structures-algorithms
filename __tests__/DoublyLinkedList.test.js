const DoublyLinkedList = require("../data-structures/DoublyLinkedList");

global.console = {
  warn: jest.fn(),
  log: jest.fn()
};

describe("Doubly Linked List", () => {
  test("Linked list can push elements onto it", () => {
    let dll = new DoublyLinkedList();
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    expect(dll.head.value).toBe(2);
    expect(dll.head.next.next.value).toBe(4);
    expect(dll.head.next.next.previous.value).toBe(3);
  });

  test("Linked list prints", () => {
    let dll = new DoublyLinkedList();
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    dll.printList();
    expect(global.console.log).toHaveBeenCalledWith("2, 3, 4, 5");
  });

  test("Linked list reverses", () => {
    let dll = new DoublyLinkedList();
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    dll.reverse();
    dll.printList();
    expect(global.console.log).toHaveBeenCalledWith("5, 4, 3, 2");
  });

  test("Linked list edge cases", () => {
    let dll = new DoublyLinkedList();
    dll.printList();
    expect(global.console.log).toHaveBeenCalledWith("");
  });
});
