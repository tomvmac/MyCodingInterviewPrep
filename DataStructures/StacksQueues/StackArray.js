class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.arr = [];
    }
  
  
    peek(){
      return this.arr[this.arr.length];
    }
  
  
    push(value){
      this.arr.push(value);
      
      return this;
    }
  
  
    pop(){
      this.arr.pop();
      return this;
  
    }
  
  
  }
  
  let myStack = new Stack();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('amazon');
  myStack.pop();
  // myStack.pop();
  // myStack.pop();
  console.log(myStack.peek());
  //myStack.printStack();
  console.log(myStack);