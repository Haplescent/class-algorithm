function stackFunc() {
  let count = 0;
  let data = {};

  function push(item) {
    data[count] = item;
    count++;
  }

  function peek() {
    return data[count - 1];
  }

  function pop() {
    if (count !== 0) {
      const entry = data[count - 1];
      delete data[count - 1];
      count--;
      return entry;
    } else return "Err: stack is empty";
  }

  return { push, peek, pop };
}

const stack = stackFunc();

stack.push(1);
stack.push(2);

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());
