function queueFunc() {
  let count = 0;
  let beg = 0;
  let data = {};

  function enqueue(item) {
    data[count] = item;
    count++;
  }

  function dequeue() {
    if (beg != count) {
      const entry = data[beg];
      delete data[beg];
      beg++;
      return entry;
    } else {
      return "Err: queue is empty";
    }
  }

  function peek() {
    return data[beg];
  }

  return { enqueue, peek, dequeue };
}

let queue = queueFunc();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(2);

console.log(queue.peek());
