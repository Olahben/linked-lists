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

  function at(index) {
    let count = -1;
    function search(obj) {
      if (count + 1 === index) {
        return obj;
      }
      if (obj.data) count += 1;
      return search(obj.next);
    }
    return search(head.next);
  }

  function pop() {
    const listSize = size();
    const penultimateNode = at(listSize - 2);
    penultimateNode.next = null;
  }

  function contains(value) {
    function searchForValue(obj) {
      if (obj.data === value) return true;
      if (obj.next === null) return false;
      return searchForValue(obj.next);
    }
    return searchForValue(head.next);
  }

  function find(value) {
    let count = -1;
    function searchForValue(obj) {
      if (obj.data) count += 1;
      if (obj.data === value) return count;
      if (obj.next === null) return null;
      return searchForValue(obj.next);
    }
    return searchForValue(head.next);
  }

  function toString() {
    let string = "";
    function appendValues(obj) {
      if (obj.data) string += `${obj.data} ,`;
      if (obj.next === null) return string;
      return appendValues(obj.next);
    }
    return appendValues(head.next);
  }

  return {
    head,
    appendNode,
    prependNode,
    size,
    headNode,
    tailNode,
    at,
    pop,
    contains,
    find,
    toString,
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
console.log(list.at(2));
list.pop();
console.log(list.contains("data3"));
console.log(list.find("data2"));
console.log(list.toString());
