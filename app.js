function node(data = null, next = null) {
  // console.log(data, next);
  return { data, next };
}

function linkedList() {
  const head = {
    next: null,
  };

  function size() {
    // console.log(head.next);
    let nodes = 0;
    function countNodes(obj) {
      if (obj === null) return;
      // console.log(obj);
      if (obj.data) {
        nodes += 1;
      }
      countNodes(obj.next);
    }
    countNodes(head.next);
    // console.log(nodes);
    return nodes;
  }

  function tailNode() {
    function getLastNode(obj) {
      // console.log(obj);
      if (obj.next === null) return obj;
      return getLastNode(obj.next);
    }
    return getLastNode(head.next);
  }

  function prependNode(value) {
    // console.log(`Head.next: ${head.next}`);
    const newNode = node(value, head.next);
    head.next = newNode;
  }

  function appendNode(value) {
    if (size() === 0) {
      prependNode(value);
    } else {
      const newNode = node(value);
      const lastNode = tailNode();
      lastNode.next = newNode;
    }
  }

  function headNode() {
    // console.log(head.next.data);
    return head.next;
  }

  return {
    head,
    appendNode,
    prependNode,
    size,
    headNode,
    tailNode,
  };
}

const list = linkedList();
list.appendNode("data");
list.prependNode("data2");
list.prependNode("data3");
list.prependNode("data4");
list.appendNode("data1");
console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.head.next);
