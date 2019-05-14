console.log("Doubly LinkedLists");

// Double LinkedList

// 10-->5-->16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {

  constructor(value){
    this.head = {
        value: value,
        next: null,
        prev: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    // appends to the tail of the list
    let newNode = new Node(value);
  
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }


  prepend(value){
    // prepends to the head of the list
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value){
    // insert value at a specific index
    let leftNode = new Node();
    let rightNode = new Node();
    let newNode = new Node(value);
    
    // start at the head
    leftNode = this.head;

    if (index == 0){
      // insert at the head
      this.prepend(value);
    }

    leftNode = this.traverseToIndex(index -1);

    if (leftNode != null){
      rightNode = leftNode.next;
      newNode.next = rightNode;
      rightNode.prev = newNode;
      leftNode.next = newNode;
      newNode.prev = leftNode;
      this.length++;
    }



    return this;

  }


  remove(index){
    let isLastElement = false;

    // handle index == 0
    if (index ==0){
      this.head = this.head.next;
      this.length--;
      return this;
    }

    if (index == this.length){
      isLastElement = true;
    }

    console.log("remove", index);
    let leftNode = new Node();
    let rightNode = new Node();

    // find node for given index
    leftNode = this.traverseToIndex(index-1);

    if (leftNode != null){
      if(isLastElement){
        rightNode = null;
      } else {
        rightNode= leftNode.next.next;
  
      }

      leftNode.next = rightNode;
      this.length--;

    }
  }


  traverseToIndex(index){
    let tmpNode = new Node();
    let tmpNodeIndex = 0;
    
     // start at the head
    tmpNode = this.head;

    if (index > this.length || index < 0){
      console.log("index "+ index + " out of bounds");
      return null;
    }

    while (tmpNodeIndex != index){
      tmpNode = tmpNode.next;
      tmpNodeIndex++;
    }

    return tmpNode;
  }

  traverse(){
     let tmpNode = new Node();
     let tmpArr = [];

     // start at the head
    tmpNode = this.head;

    while (tmpNode != null){
      tmpArr.push(tmpNode.value);
      tmpNode = tmpNode.next;
    }

    console.log(tmpArr);
    
  }


  reverse(){

  }

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(76);

//myLinkedList.prepend(4);
// myLinkedList.prepend(8);

// inserts
//myLinkedList.insert(3, 90);

myLinkedList.traverse();

// remove
// myLinkedList.remove(4);

// myLinkedList.traverse();

//console.log(myLinkedList);


