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

  function prependNode(value) {
    console.log(`Head.next: ${head.next}`);
    const newNode = node(value, head.next);
    head.next = newNode;
    console.log(newNode);
  }

  return { head, appendNode, prependNode };
}

const list = linkedList();
list.appendNode("data");
list.prependNode("data2");
