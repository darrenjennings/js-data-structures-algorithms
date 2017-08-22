const SinglyLinkedList = require("../data-structures/SinglyLinkedList");

global.console = {
  warn: jest.fn(),
  log: jest.fn()
};

describe("Singly Linked List", () => {
  test("Linked list can push elements onto it", () => {
    let sll = new SinglyLinkedList();
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    expect(sll.head.value).toBe(2);
    expect(sll.head.next.next.value).toBe(4);
    expect(sll.head.next.next.next.value).toBe(5);
  });

  test("Linked list prints", () => {
    let sll = new SinglyLinkedList();
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    sll.printList();
    expect(global.console.log).toHaveBeenCalledWith("2, 3, 4, 5");
  });

  test("Linked list reverses", () => {
    let sll = new SinglyLinkedList();
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);
    sll = sll.reverse();
    sll.printList();
    expect(global.console.log).toHaveBeenCalledWith("5, 4, 3, 2");
  });

  test("Linked list edge cases", () => {
    let sll = new SinglyLinkedList();
    sll.printList();
    expect(global.console.log).toHaveBeenCalledWith("");
  });
});
