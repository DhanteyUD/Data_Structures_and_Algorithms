//* Reverse a linked list in JavaScript.

// 1. Define the Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Adds a node to the end linked list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        
        current.next = newNode;
    }

    // Print the linked list
    print() {
        let current = this.head;
        const values = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(' -> '));
    }
}

// 2. Iterative Approach to Reverse the Linked List (The iterative approach uses three pointers: prev, current, and next.)
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

// Example:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original List:");
list.print();

list.head = reverseLinkedList(list.head);

console.log("Reversed List (Iterative):");
list.print();