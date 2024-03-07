/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  getNode(idx){
    let counter = 0;
    if (this.head){
      let currentNode = this.head;
      while (counter < idx){
        if (currentNode.next === null){
          throw new Error("idx surpasses length of LinkedList");
        }else{
          currentNode = currentNode.next;
          counter += 1;
        }
      }
      return currentNode;
    }else{
      throw Error ("This Index doesn't exist in this list!");
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(this.head === null) this.head = newNode;
    if(this.tail === null) {
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head===null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null){
      throw Error("Nothing to pop.");
    }else if(this.tail === this.head){
      let returnVal = this.tail.val;
      this.tail = null;
      this.head = null;
      this.length -= 1;
      return returnVal;
    }else{
      let returnNode = this.tail;
      let currentNode = this.head;
      while(currentNode.next != this.tail){
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      console.log(`current Node val = ${currentNode.val}`);
      this.length -= 1;
      return returnNode.val;
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head){
      let returnNode = this.head;
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
      }else{
        this.head = this.head.next;
      }
      this.length -= 1;
      return returnNode.val;
    }else{
      throw new Error("LinkedList is empty!");
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.getNode(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.getNode(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0){
      this.unshift(val);
      return;
    }else if (idx === this.length){
      this.push(val);
      return;
    }else{
      let newNode = new Node(val);
      let leftNode = this.getNode(idx-1);
      newNode.next = leftNode.next;
      leftNode.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0){
      this.shift();
    }else if (idx === this.length-1){
      this.pop();
    }else{
      let nodeBefore = this.getNode(idx-1);
      nodeBefore.next = nodeBefore.next.next;
      this.length -= 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currentNode = this.head;
    if(currentNode === null){
      return 0;
    }
    while (currentNode){
      sum += currentNode.val;
      console.log(`sum = ${sum}`)
      currentNode = currentNode.next;
    }
    return sum/(this.length);
  }
}

module.exports = LinkedList;
