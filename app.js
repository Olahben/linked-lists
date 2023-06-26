function node(data = null, next = null) {
  console.log(data, next);
  return { data, next };
}

function linkedList() {
  const head = {
    next: null,
  };

  function appendNode(value) {
    const newNode = node(value);
    head.next = newNode;
  }

  return { appendNode };
}
console.log(linkedList().appendNode("data"));
/*
Linkedlist:
Represents the full list

Contains functions that operates on the linkedList

node:
Represents a node in the list
has two properties, data, and next. By default they are null

*/
