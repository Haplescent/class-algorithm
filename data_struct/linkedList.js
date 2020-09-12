class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  getCount() {
    let count = 1;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }

  getLast() {
    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode.data;
  }

  addNode(node) {
    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);

// set up nodes
node1.next = node2;

// set up LinkedList
let list = new LinkedList(node1);

//console.log(list.head.next.data);

console.log("The last Node is: ", list.getLast());

let node3 = new ListNode(8);

list.addNode(node3);

console.log("The last Node is: ", list.getLast());

console.log(list.getCount());
