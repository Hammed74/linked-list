class LinkedList {
  constructor(head) {
    this.head = head;
  }

  prepend(value) {
    this.head = { value: value, nextNode: this.head };
  }

  append(value, currentNode = myList.head) {
    if (currentNode.nextNode === null) {
      return (currentNode.nextNode = new Node(value, null));
    } else {
      currentNode = currentNode.nextNode;
      return this.append(value, currentNode);
    }
  }

  size(node = this.head, sum = 0) {
    if (node.nextNode === null) {
      return sum + 1;
    } else {
      sum++;
      node = node.nextNode;
      return this.size(node, sum);
    }
  }

  headNode() {
    return this.head;
  }

  tail(node = this.head) {
    if (node.nextNode === null) {
      return node;
    } else {
      node = node.nextNode;
      return this.tail(node);
    }
  }

  at(index, node = this.head, nodeNum = 0) {
    if (nodeNum > this.size() - 1) {
      return "Nothing exists here";
    } else if (index === nodeNum) {
      return node;
    } else {
      nodeNum++;
      node = node.nextNode;
      return this.at(index, node, nodeNum);
    }
  }

  pop(node = this.head) {
    if (node.nextNode.nextNode === null) {
      node.nextNode = null;
      return node;
    } else {
      node = node.nextNode;
      return this.pop(node);
    }
  }

  contains(value, node = this.head) {
    if (node.value !== value && node.nextNode === null) {
      return "Sorry It Ain't Here!";
    } else if (node.value === value) {
      return true;
    } else {
      node = node.nextNode;
      return this.contains(value, node);
    }
  }

  find(value, node = this.head, nodeNum = 0){
    if (node.value!== value && node.nextNode === null){
        return "Not Found"
    }else if(node.value === value){
        return nodeNum
    }else{
        nodeNum++
        node = node.nextNode
        return this.find(value,node,nodeNum)
    }
  }

  toString(node = this.head, string = `${node.value} -> `){
    if (node.nextNode === null){
        return `${string}null`
    } else{
        node = node.nextNode
        string = string + `${node.value} -> `
        return this.toString(node, string)
    }
  }

  insertAt(value,index){
    if(index > this.size() || index < 0){
        console.log("Choose a different number.")
    }else{
    let beforeNode = this.at(index - 1)
    let afterNode = this.at(index)
       if (index === this.size()) {
        let newNode = new Node(value, null)
            beforeNode.nextNode = newNode;
       }else{
    let newNode = new Node(value, afterNode)
        beforeNode.nextNode = newNode;
       }
  }
}

removeAt(index){
    let beforeNode = this.at(index - 1)
    let afterNode = this.at(index + 1)
    beforeNode.nextNode = afterNode
}
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let myList = new LinkedList(new Node("H", null));

myList.prepend("G");

myList.head.nextNode.nextNode = new Node("I", null);

myList.append("J");

myList.append("K")


myList.insertAt("Random Letter", 5)

myList.insertAt("Another Random Letter", 6);

myList.prepend("F")


console.log(myList.toString())

