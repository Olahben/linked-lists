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

  function size() {
    console.log(head.next);
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
    console.log(nodes);
    return nodes;
  }

  return {
    head,
    appendNode,
    prependNode,
    size,
  };
}

const list = linkedList();
list.appendNode("data");
list.prependNode("data2");
list.size();
