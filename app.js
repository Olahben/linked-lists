function node(data = null, next = null) {
  // console.log(data, next);
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
    // console.log(`Head.next: ${head.next}`);
    const newNode = node(value, head.next);
    head.next = newNode;
  }

  function size() {
    // console.log(head.next);
    let nodes = 0;
    function countNodes(obj) {
      if (obj === null) return;
      console.log(obj);
      if (obj.data) {
        nodes += 1;
      }
      countNodes(obj.next);
    }
    countNodes(head.next);
    // console.log(nodes);
    return nodes;
  }

  function headNode() {
    // console.log(head.next.data);
    return head.next.data;
  }

  return {
    head,
    appendNode,
    prependNode,
    size,
    headNode,
  };
}

const list = linkedList();
console.log(list.appendNode("data"));
console.log(list.prependNode("data2"));
console.log(list.size());
console.log(list.headNode());
